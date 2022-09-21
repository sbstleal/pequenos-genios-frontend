import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { IStudent } from '../../models/student';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-table-student',
  templateUrl: './table-student.component.html',
  styleUrls: ['./table-student.component.scss'],
})
export class TableStudentComponent implements OnInit {
  student: IStudent[] = [];

  displayedColumns = [
    'Nome',
    'Telefone',
    'Mensalidade',
    'E-mail',
    'Rua',
    'Número',
    'Cidade',
    'Estado',
    'CEP',
    'País',
  ];
  dataSource = new MatTableDataSource<IStudent>();

  constructor(private stundentService: StudentService) {}

  ngOnInit() {
    this.getStudentsInformation();
  }

  getStudentsInformation() {
    this.stundentService.getAllStudents().subscribe((res) => {
      console.log(res);
      this.dataSource.data = res;
    });
  }
}
