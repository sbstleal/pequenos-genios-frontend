import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';

import { IObjetctStudent, IStudent } from '../../models/student';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-table-student',
  templateUrl: './table-student.component.html',
  styleUrls: ['./table-student.component.scss'],
})
export class TableStudentComponent implements OnInit {
  student: IStudent[];

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

  constructor(private stundentService: StudentService, private activeRouter: ActivatedRoute) { }

  //ngOnInit() {
  //  this.getStudentsInformation();
  //  const id = this.activeRouter.snapshot.paramMap.get('id');
  //  if (id != null) { console.log("\n ************************" + id + "************************ \n") }

  //}

  ngOnInit() {
    this.getStudentsInformation();
  }

  getStudentsInformation() {
    this.stundentService.getAllStudents().subscribe((res: IObjetctStudent) => {
      console.log(res);
      this.dataSource.data = res.content;
    });
  }

  @ViewChild('paginator') paginator: MatPaginator

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator
  }

}
