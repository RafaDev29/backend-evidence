import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Sede } from '../../sede/entities/sede.entity';

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

  @OneToMany(() => Sede, (sede) => sede.company)
  sedes: Sede[];
}
