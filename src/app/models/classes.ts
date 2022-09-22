import {IStudent} from "./student";
import {ITeacher} from "./teacher";

export interface IClass {
  id?: number | null
  grade: number
  teacher: ITeacher
  students: IStudent[]
}
