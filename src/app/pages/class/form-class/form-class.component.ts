import {Component, OnInit} from '@angular/core';
import {IStudent} from "../../../models/student";
import {MatTableDataSource} from "@angular/material/table";
import {ModelSelectEnum} from "../../../models/model.select.enum";
import {ITeacher} from "../../../models/teacher";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ClassService} from "../../../services/class.service";
import {IClass} from "../../../models/classes";

@Component({
  selector: 'app-form-class',
  templateUrl: './form-class.component.html',
  styleUrls: ['./form-class.component.scss']
})
export class FormClassComponent implements OnInit {
  dataSource = new MatTableDataSource<IStudent>([]);

  modelStudent = ModelSelectEnum.student;
  modelTeacher = ModelSelectEnum.teacher;

  isEdit: boolean = false;

  id: number | null;
  gradeSelected: number;
  teacherSelected: ITeacher | null;
  studentsList: Array<IStudent> = [];

  displayedColumns: string[] = ['Nome', 'Telefone', 'E-mail'];
  classService: ClassService;


  constructor(private activedRoute: ActivatedRoute, private http: HttpClient, private router: Router) {
    this.classService = new ClassService(this.http);
  }

  ngOnInit(): void {
    if (this.activedRoute.snapshot.paramMap.get('id')) {
      this.isEdit = true;
      this.id = Number.parseInt(this.activedRoute.snapshot.paramMap.get('id')!);

      this.classService.findClassById(this.id).subscribe({
        next: (n) => {
          this.gradeSelected = n.grade;
          this.teacherSelected = n.teacher;
          this.studentsList = n.students;
          this.dataSource.data = this.studentsList;
        }
      })
    }
  }

  submit() {
    let body: IClass = {
      id: this.id,
      grade: this.gradeSelected,
      teacher: this.teacherSelected!,
      students: this.studentsList

    }
    if (this.isEdit) {
      this.classService.update(body).subscribe({
        next: (n) => {
          alert('Cadastro Atualizado!')
        },
        error: (e) => {
          alert('Ocorreu um erro: ' + e);
        }
      });
    } else {
      this.classService.register(body).subscribe({
        next: (n) => {
          alert('cadastrado com Sucesso!')
          this.id = null;
          this.gradeSelected = 0;
          this.studentsList = [];
          this.teacherSelected = null;
          this.dataSource.data = [];
          if(!confirm('gostaria de cadastrar outro?')) {
            this.router.navigateByUrl('main/classes')
          }
        },
        error: (e) => {
          alert('Ocorreu um erro: ' + e);
        }
      });
    }
  }

  teacherChanged(teacher: ITeacher): void {
    this.teacherSelected = teacher;
  }

  removeItem(i: number) {
    this.studentsList.splice(i, 1);
    this.dataSource.data = this.studentsList;
  }


  studentChanged(student: IStudent): void {
    this.studentsList.push(student);
    this.dataSource.data = this.studentsList;
  }

  removeTeacher() {
    this.teacherSelected = null;
  }

  delete() {
    if(confirm('Você está prestes a excluir a classe, esta ação não pode ser desfeita!')) {
      this.classService.delete(this.id!).subscribe({
        next: (n) => {
          alert('Classe excluída com sucesso!');
          this.router.navigateByUrl('/main')
        }
      })
    }
  }
}
