import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{

    @PrimaryGeneratedColumn()
    id : number;

    @Column({
        type : "varchar",
        length : 100,
        nullable : false
    })
    name : string;

    @Column({
        type : "numeric",
        nullable : false,
    })
    age : number;

    @Column({
        type : "varchar",
        length : 10,
        nullable : false,
    })
    gender : string;

    @Column({
        type : "varchar",
        length : 100,
        nullable : false,
        unique : true,
    })
    email : string;

    @Column({
        type : "varchar",
        length : 100,
        nullable : false,
        unique : true,
    })
    password : string;
}