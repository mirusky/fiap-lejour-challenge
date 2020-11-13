import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Invoice {
  @PrimaryColumn({ name: "id" })
  ID: number;

  @Column({ name: "wedding_id" })
  WEDDING_ID: number;

  @Column({ name: "vendor_id" })
  VENDOR_ID: number;

  @Column({ name: "amount", type: "float4" })
  AMOUNT: number;

  @Column({ name: "vendor_amount", type: "float4" })
  VENDOR_AMOUNT: number;

  @Column({ name: "accepted" })
  ACCEPTED: string;

  @Column({ name: "vendor_category" })
  VENDOR_CATEGORY: string;
}
