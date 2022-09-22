import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { IClass } from "../models/classes";

export class ClassService {
  constructor(private http: HttpClient) { }

  findClassById(id: number): Observable<IClass> {
    return this.http.get(`${environment.backend}/class/${id}`)
  }

  register(body: IClass): Observable<IClass> {
    return this.http.post(`${environment.backend}/class`, body)
  }

  update(body: IClass): Observable<IClass> {
    return this.http.put(`${environment.backend}/class/${body.id}`, body)
  }

}
