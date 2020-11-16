import { getManager } from "typeorm";
import { NextFunction, Request, Response } from "express";

export class InsightController {
  private manager = getManager();

  async weddingMetrics(req: Request, res: Response, next: NextFunction) {
    return this.manager.query(`
select 
	sum(wedding.budget) as sum_budget,
	avg(wedding.budget) as avg_budget,
	min(wedding.budget) as min_budget,
	max(wedding.budget) as max_budget,
	extract(year from TO_DATE(wedding_date,'YYYY-MM-DD')) as "year",
	extract(month from TO_DATE(wedding_date,'YYYY-MM-DD')) as "month"
from lejour.wedding 
where 
	wedding.budget IS NOT null 
	and wedding.budget > 0
	and wedding_date IS NOT null
group by "month", "year"
order by  "year" desc,"month" desc
    `);
  }

  async vendorFavorited(req: Request, res: Response, next: NextFunction) {
    return this.manager.query(`
-- fornecedor mais favoritado 
select 
	vendor_id, 
	count(vendor_id ) as n_favorited
from lejour.favorite
group by vendor_id 
order by n_favorited desc
    `);
  }

  async vendorDeny(req: Request, res: Response, next: NextFunction) {
    return this.manager.query(`
-- fornecedores que mais recusam
select
	vendor_id,
	vendor_category,
	count(vendor_id) as n_canceled
from lejour.invoice
where accepted = 'FALSE'
group by vendor_id, vendor_category
order by n_canceled desc, vendor_id
    `);
  }

  async vendorAccepts(req: Request, res: Response, next: NextFunction) {
    return this.manager.query(`
-- fornecedores que mais aceitam
select
	vendor_id,
	vendor_category,
	count(vendor_id ) as n_accepted
from lejour.invoice
where accepted = 'TRUE'
group by vendor_id, vendor_category, accepted 
order by n_accepted desc
    `);
  }

  async vendorDenyAndAccepts(req: Request, res: Response, next: NextFunction) {
    return this.manager.query(`
-- fornecedor propostas deny accepted	
SELECT 
	t.vendor_id,
	i.vendor_category,
	coalesce(t.accepted,0) as accepted,
	coalesce(t.rejected,0) as rejected
FROM 
	crosstab(
		$$select
			vendor_id,
			accepted,
			count(vendor_id) as n_occurrences
		from lejour.invoice
		group by vendor_id, accepted 
		order by 1,2$$
	) AS t (vendor_id int4, accepted int8 ,rejected int8)
inner join lejour.invoice i
on i.vendor_id = t.vendor_id
group by t.vendor_id, i.vendor_category, t.accepted, t.rejected
order by accepted desc, t.vendor_id
    `);
  }

  async invoicesMetrics(req: Request, res: Response, next: NextFunction) {
    return this.manager.query(`
-- compromissos metricas
SELECT 
	t.vendor_id,
	i.vendor_category as vendor_category,
	coalesce(t.canceled,0) as canceled,
	coalesce(t.confirmed,0) as confirmed,
	coalesce(t.visited,0) as visited,
	coalesce(t.created,0) as created
from
	crosstab(
		$$select 
			vendor_id,
			status,
			count(vendor_id)
		from lejour.appointment
		group by vendor_id, status, vendor_category
		order by 1,2;$$
	) 
AS t (vendor_id int4, canceled int8, confirmed int8, visited int8, created int8)
left join lejour.invoice i 
on i.vendor_id = t.vendor_id
group by t.vendor_id,i.vendor_category, t.canceled, t.confirmed, t.visited, t.created
    `);
  }

  async weddingStyles(req: Request, res: Response, next: NextFunction) {
    return this.manager.query(`
-- Estilo de casamento por periodo
select 
	"style", 
	count("style"),
	extract(year from TO_DATE(wedding_date,'YYYY-MM-DD')) as "year",
	extract(month from TO_DATE(wedding_date,'YYYY-MM-DD')) as "month"
from lejour.wedding
group by "month", "year","style" 
order by "year" desc,"month" desc, 1, 2;
    `);
  }

  async vendorMetrics(req: Request, res: Response, next: NextFunction) {
    return this.manager.query(`
-- Gastos por tipo de fornecedor (banda, garçon, bolo, local ...)
select 
	i.vendor_category,
	sum(i.vendor_amount) as sum_vendor_amount,
	avg(i.vendor_amount) as avg_vendor_amount,
	min(i.vendor_amount) as min_vendor_amount,
	max(i.vendor_amount) as max_vendor_amount
from lejour.invoice i 
where 
	i.vendor_amount IS NOT null 
	and i.vendor_amount > 0
group by i.vendor_category
order by i.vendor_category
    `);
  }
}
