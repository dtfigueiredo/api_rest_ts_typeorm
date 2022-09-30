import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinColumn, JoinTable } from "typeorm"
import { Room } from "./Room"

@Entity('subjects')
export class Subject {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'text' })
    name: string

    @ManyToMany(() => Room, (room) => room.subjects) //relacionamento entre a classe video e a classe room
    @JoinTable({ //decorator para tabela de ligação muitos para muitos
        name: 'room_subject',
        joinColumn: {
            name: 'room_id',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'subject_id',
            referencedColumnName: 'id'
        }
    })
    rooms: Room[]
}