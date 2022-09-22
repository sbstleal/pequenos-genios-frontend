import { IStudent } from "./student"
import { ITeacher } from "./teacher"

export interface IClass {
  id?: number | null
  grade?: number | null
  teacher?: ITeacher | null
  students?: IStudent[] | null
}
