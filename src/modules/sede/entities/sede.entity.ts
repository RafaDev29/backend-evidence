import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Companies } from '../../companies/entities/companies.entity';
import { Evidence } from 'src/modules/evidence/entities/evidence.entity';  // <-- Mayúscula correcta



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

  @OneToMany(() => Evidence, (evidence) => evidence.sede)
  evidences: Evidence[]; 
  

}
