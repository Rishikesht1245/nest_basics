import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Profile{
 @PrimaryGeneratedColumn()
    id : number;

    @Column({
        type : "varchar",
        length : 24,
        nullable : true,
        unique : true,
    })
    firstName : string;

    @Column({
        type : "varchar",
        length : 24,
        nullable : true,
        unique : true,
    })
    lastName : string;

    @Column({
        type : "varchar",
        length : 100,
        nullable : true,
        unique : true,
    })
    gender : string;

    // @Column({
    //     type : "varchar",
    //     length : 100,
    //     nullable : false,
    //     unique : true,
    // })
    // password : string;


    @Column({
        type : 'timestamp',  // DateTime in mysql
        nullable : true,
    })
    dateOfBirth : Date

    @Column({
        type : 'text', // no need to save the length of the characcter
        nullable : true,
    })
    bio : string;

    @Column({
        type : 'text',
        nullable : true,
    })
    profileImage : string;
}