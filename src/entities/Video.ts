import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { Room } from "./Room"

@Entity('videos')
export class Video {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'text' })
    name: string

    @Column({ type: 'text' })
    url: string

    @ManyToOne(() => Room, (room) => room.videos) //relacionamento entre a classe video e a classe room
    @JoinColumn({ name: 'room_id' }) //decorator para chave estrangeira
    room: Room
}