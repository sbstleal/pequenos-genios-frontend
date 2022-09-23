import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {lastValueFrom, Observable} from 'rxjs';
import {IObjetctTeacher, ITeacher} from '../models/teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor( public http: HttpClient ) { }

  api_url = environment.backend;

  public async postTeacher(teacher: ITeacher) {
    await lastValueFrom(
      this.http.post<ITeacher>(`${this.api_url}/teacher`, teacher)
    );
  }

  public async updateTeacher(id:number, teacher: ITeacher) {
    await lastValueFrom(
      this.http.put<ITeacher>(`${this.api_url}/teacher/${id}`, teacher)
    );
  }

  public getAllTeachers(): Observable<IObjetctTeacher> {
    return this.http.get<IObjetctTeacher>(`${this.api_url}/teacher`);
  }

  public findTeacherById(id:number): Observable<ITeacher> {
    return this.http.get<ITeacher>(`${this.api_url}/teacher/${id}`);
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api_url}/teacher/${id}`);
  }

}
