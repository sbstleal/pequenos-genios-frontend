import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {lastValueFrom} from 'rxjs';
import {ITeacher} from '../models/teacher';

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


  public async getAllTeachers() {
    await lastValueFrom(this.http.get<ITeacher>(`${this.api_url}/teacher`));
  }


}
