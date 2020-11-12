import { Entity, Column } from "typeorm";

@Entity()
export class User {
  @Column()
  id: number;

  @Column()
  created_at: string;
}
