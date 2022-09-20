import { IStudent } from "./student"
import { ITeacher } from "./teacher"

export interface classes {
  id: number
  grade: string
  teacher: ITeacher
  students: Array<IStudent>
}
