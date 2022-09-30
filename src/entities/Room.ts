import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany } from "typeorm"
import { Subject } from "./Subject"
import { Video } from "./Video"

@Entity('rooms')
export class Room {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'text' })
    name: string

    @Column({ type: 'text', nullable: true })
    description: string

    @OneToMany(() => Video, (video) => video.room) //relacionamento entre a classe video e a classe room
    videos: Video[]

    @ManyToMany(() => Subject, (subject) => subject.rooms) //relacionamento entre a classe subject e a classe room
    subjects: Subject[]
}