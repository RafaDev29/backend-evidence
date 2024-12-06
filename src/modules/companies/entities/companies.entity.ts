import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tb_companies')
export class Companies {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  ruc: string;

  @Column({ type: 'varchar', length: 255 })
  bussinesName: string;
}
