import { Entity, Column } from "typeorm";

@Entity()
export class Invoice {
  @Column()
  id: number;

  @Column()
  wedding_id: number;

  @Column()
  vendor_id: number;

  @Column()
  amount: number;

  @Column()
  vendor_amount: number;

  @Column()
  accepted: string;
  
  @Column()
  vendor_category: string;
}
