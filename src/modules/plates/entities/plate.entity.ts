import { Evidence } from "src/modules/evidence/entities/evidence.entity";

import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity('tb_plates')
export class Plate {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar' , length : 255})
    InIngCou: string;

    @Column({ type: 'int' })
    NumVez: number;

    @Column({ type: 'varchar' , length : 255})
    PlaVeh: string;

    @Column({ type: 'boolean' })
    status: boolean;

   
  @OneToMany(() => Evidence, (evidence) => evidence.plate)
  evidences: Evidence[];

}
