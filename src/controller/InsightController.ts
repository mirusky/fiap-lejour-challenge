import { getManager } from "typeorm";
import { NextFunction, Request, Response } from "express";

export class InsightController {
  private manager = getManager();

  async weddingMetrics(request: Request, response: Response, next: NextFunction) {
    return this.manager.query(`
-- Gastos casamento, agrupados por mes e ano
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
    `);
  }

  
}
