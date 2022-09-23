import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {IClass} from "../models/classes";
import {Page} from "../models/page.model";

export class ClassService {
  constructor(private http: HttpClient) { }

  findClassById(id: number): Observable<IClass> {
    return this.http.get<IClass>(`${environment.backend}/class/${id}`)
  }

  register(requestBody: IClass): Observable<IClass> {
    return this.http.post<IClass>(`${environment.backend}/class`, requestBody)
  }

  update(requestBody: IClass): Observable<IClass> {
    return this.http.put<IClass>(`${environment.backend}/class/${requestBody.id}`, requestBody)
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.backend}/class/${id}`)
  }

  findAll(): Observable<Page<IClass>> {
    return this.http.get<Page<IClass>>(`${environment.backend}/class`)
  }
}
