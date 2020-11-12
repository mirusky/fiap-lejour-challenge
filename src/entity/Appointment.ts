import { Entity, Column } from "typeorm";

@Entity()
export class Appointment {
  @Column()
  id: number;

  @Column()
  wedding_id: number;

  @Column()
  vendor_id: number;

  @Column()
  status: string;
  
  @Column()
  vendor_category: string;

  @Column()
  begins_at: string;
}
