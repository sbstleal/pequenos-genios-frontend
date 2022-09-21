import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { IStudent } from '../models/student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(public http: HttpClient) {}

  api_url = environment.backend;


  public async postStudent(student: IStudent) {
    await lastValueFrom(
      this.http.post<IStudent>(`${this.api_url}/student`, student)
    );
  }


  public getAllStudents(): Observable<IStudent[]>{
    return this.http.get<IStudent[]>(`${this.api_url}/student`);
  }
}
