import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { IStudent } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class EstudanteService {

  constructor(private http: HttpClient) { }

  api_url = environment.backend;

  public async postStudent(student: IStudent){
    await this.http.post<IStudent>(`${this.api_url}/student.json`, student).toPromise();
}
}
