import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Appointment {
  @PrimaryColumn({ name: "id" })
  ID: number;

  @Column({ name: "wedding_id" })
  WEDDING_ID: number;

  @Column({ name: "vendor_id" })
  VENDOR_ID: number;

  @Column({ name: "status" })
  STATUS: string;

  @Column({ name: "vendor_category" })
  VENDOR_CATEGORY: string;

  @Column({ name: "begins_at" })
  BEGINS_AT: string;
}
