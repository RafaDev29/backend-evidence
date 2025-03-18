import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Sedes } from 'src/modules/sede/entities/sede.entity';

@Entity('tb_evidence')
export class evidence {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  direction: string;

  @Column({ type: 'varchar', length: 255 })
  code: string;

  @ManyToOne(() => Sedes, (sede) => sede.evidences, { onDelete: 'CASCADE' })
  sede: Sede;
}
