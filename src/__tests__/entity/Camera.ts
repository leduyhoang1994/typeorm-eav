import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Camera {

  static ENTITY_CODE: string = "Camera";

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  filename: string;

  @Column()
  views: number;

  @Column()
  isPublished: boolean;
}