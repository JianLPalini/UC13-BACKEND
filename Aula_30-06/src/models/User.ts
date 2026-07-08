import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./Post";

// Precisamos sinalizar ao TypeORM que esta classe será mapeada em uma tabela
// Para fazer isso, utilizamos um decorator:

// @Entity('users') indica que deve ser criada uma tabela com o nome 'users'
@Entity('users')
export class User {
    // PrimaryGeneratedColumn() indica que este atributo será uma coluna com PRIMARY KEY e AUTO_INCREMENT

    @PrimaryGeneratedColumn()
    id:number;

    // @Column marca o atributo como uma coluna 'normal'
    // lenght diz qual o tamanho máximo de caracteres
    // nullable:false diz que não pode ser nula (tipo o NOT NULL)
    @Column({length:100, nullable:false}) 
    name:string;

    @Column({length:150, unique: true, nullable:false}) 
    email:string;

    @Column({length:100, nullable:false, select:false}) 
    password:string;
    
    // @OneToMany indica que um User pode ter vários Post
    // Precisamos passar dois parâmetros:
    // () => Post -> Função que retorna a entidade relacionada
    // post +> post.user -> indica qual a propriedade na classe Post que referencia o User
    // Com tudo isso definido, o TypeORM consegue criar automaticamente as ligações entre as tabelas e as chaves estrangeiras.
    // Temos que fazer sempre para todos os envolvidos, nesse caso, tanto para User quanto para Post
    @OneToMany(() => Post, post => post.user) 
    posts:Post[]
}