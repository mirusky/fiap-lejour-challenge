import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Wedding {
  @PrimaryColumn({ name: "id" })
  ID: number;

  @Column({ name: "owner_id" })
  OWNER_ID: number;

  @Column({ name: "budget", type: "float4", nullable: true })
  BUDGET: number;

  @Column({ name: "wedding_date", nullable: true })
  WEDDING_DATE: string;

  @Column({ name: "number_of_guests", type: "float4", nullable: true })
  NUMBER_OF_GUESTS: number;

  @Column({ name: "style" })
  STYLE: string;
}
