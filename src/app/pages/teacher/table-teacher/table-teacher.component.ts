import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { IObjetctTeacher, ITeacher } from '../../../models/teacher';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-table-teacher',
  templateUrl: './table-teacher.component.html',
  styleUrls: ['./table-teacher.component.scss']
})
export class TableTeacherComponent implements OnInit {
  teacher: ITeacher[]

  displayedColumns = [
    'Nome',
    'Telefone',
    'E-mail',
    'Salário',
    'Rua',
    'Número',
    'Bairro',
    'Cidade',
    'Estado',
    'CEP',
    'País',
  ];
  dataSource = new MatTableDataSource<ITeacher>();

  constructor(private teacherService: TeacherService) {}

  ngOnInit() {
    this.getTeacherInformation()
  }

  getTeacherInformation() {
    this.teacherService.getAllTeachers().subscribe((res: IObjetctTeacher) => {
      console.log(res)
      this.dataSource.data = res.content
    });
  }

  @ViewChild('paginator') paginator: MatPaginator

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator
  }

}

