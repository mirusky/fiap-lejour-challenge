import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryColumn({ name: "id" })
  ID: number;

  @Column({ name: "created_at" })
  CREATED_AT: string;
}
