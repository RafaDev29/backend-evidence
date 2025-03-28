import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Sede } from 'src/modules/sede/entities/sede.entity';
import { Plate } from 'src/modules/plates/entities/plate.entity';

@Entity('tb_evidence')
export class Evidence {  // <-- Debe comenzar con mayúscula
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  detail: string;

  @Column({ type: 'varchar', length: 255 })
  photo: string;

  @Column({ type: 'varchar', length: 255 })
  direction: string;

  @Column({ type: 'varchar', length: 255 })
  code: string;

  @ManyToOne(() => Sede, (sede) => sede.evidences, { onDelete: 'CASCADE' })
  sede: Sede;

  
  @ManyToOne(() => Plate, (plate) => plate.evidences)
  plate: Plate;
}

