import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Jogador } from "./Jogador";


@Entity('selecao')
export class Selecao {
  

    @PrimaryGeneratedColumn()
    id: number;

    
    @Column({ length: 100, nullable: false, unique: true })
    name: string;

    @Column({ length: 100, nullable: false, unique: true })
    pais: string;

    @Column({ length: 100, nullable: false, })
    tecnico: string;

    @Column({ nullable: false, unique: true })
    rankingFifa: number;

    @Column({ nullable: false })
    anoFundação: number;

    
    @OneToMany(() => Jogador, jogador => jogador.selecao)
    jogador: Jogador[]
}