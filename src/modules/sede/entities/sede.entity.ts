import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Companies } from '../../companies/entities/companies.entity';

@Entity('tb_sede')
export class Sede {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  direction: string;

  @Column({ type: 'varchar', length: 255 })
  code: string;

  @ManyToOne(() => Companies, (company) => company.sedes, { onDelete: 'CASCADE' })
  company: Companies;
}
