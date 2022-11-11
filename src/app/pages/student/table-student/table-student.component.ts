import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { IObjetctStudent, IStudent } from '../../../models/student';
import { StudentService } from '../../../services/student.service';

@Component({
  selector: 'app-table-student',
  templateUrl: './table-student.component.html',
  styleUrls: ['./table-student.component.scss'],
})
export class TableStudentComponent implements OnInit {
  student: IStudent[]

  displayedColumns = [
    'Nome',
    'Telefone',
    'Mensalidade',
    'E-mail',
    'Rua',
    'Número',
    'Bairro',
    'Cidade',
    'Estado',
    'CEP',
    'País',
  ];
  dataSource = new MatTableDataSource<IStudent>();

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.getStudentsInformation()
  }

  getStudentsInformation() {
    this.studentService.getAllStudents().subscribe((res: IObjetctStudent) => {
      console.log(res)
      this.dataSource.data = res.content
    });
  }

  @ViewChild('paginator') paginator: MatPaginator

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator
  }

}
