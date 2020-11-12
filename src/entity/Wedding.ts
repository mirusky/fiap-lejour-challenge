import { Entity, Column } from "typeorm";

@Entity()
export class Wedding {
  @Column()
  id: number;

  @Column()
  owner_id: number;

  @Column()
  budget: number;

  @Column()
  wedding_date: string;

  @Column()
  number_of_guests: number;

  @Column()
  style: string;
}
