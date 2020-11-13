import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Favorite {
  @PrimaryColumn({ name: "id", generated: "increment" })
  ID: number;

  @Column({ name: "wedding_id" })
  wedding_id: number;

  @Column({ name: "vendor_id" })
  vendor_id: number;
}
