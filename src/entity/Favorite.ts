import { Entity, Column } from "typeorm";

@Entity()
export class Favorite {
  @Column()
  id: number;

  @Column()
  wedding_id: number;

  @Column()
  vendor_id: number;
}
