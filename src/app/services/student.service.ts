import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { IObjetctStudent, IStudent } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(public http: HttpClient) {}

  api_url = environment.backend;

  public async postStudent(student: IStudent) {
    await lastValueFrom(
      this.http.post<IStudent>(`${this.api_url}/student`, student)
    );
  }

<<<<<<< Updated upstream
  public async updateStudent(id:number, student: IStudent) {
    await lastValueFrom(
      this.http.put<IStudent>(`${this.api_url}/student/${id}`, student)
=======
  public async updateStudent(student: IStudent) {
    await lastValueFrom(
      this.http.put<IStudent>(`${this.api_url}/student`, student)
>>>>>>> Stashed changes
    );
  }

  public getAllStudents(): Observable<IObjetctStudent>{
    return this.http.get<IObjetctStudent>(`${this.api_url}/student`);
  }

  public findStudentsById(id:number): Observable<IStudent> {
    return this.http.get<IStudent>(`${this.api_url}/student/${id}`);
  }

<<<<<<< Updated upstream
  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api_url}/student/${id}`);
  }

=======
>>>>>>> Stashed changes
}
