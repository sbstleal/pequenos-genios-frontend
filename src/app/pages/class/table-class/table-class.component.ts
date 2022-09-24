import { Component, OnInit } from '@angular/core';
import {IClass} from "../../../models/classes";
import {MatTableDataSource} from "@angular/material/table";
import {IStudent} from "../../../models/student";
import {ClassService} from "../../../services/class.service";
import {HttpClient} from "@angular/common/http";
import {PageEvent} from "@angular/material/paginator";
import {animate, state, style, transition, trigger} from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-class',
  templateUrl: './table-class.component.html',
  styleUrls: ['./table-class.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])]
})
export class TableClassComponent implements OnInit {

  classDataSource: MatTableDataSource<IClass> = new MatTableDataSource<IClass>([]);
  studentDataSource: MatTableDataSource<IStudent> = new MatTableDataSource<IStudent>([]);
  id: number | null = null;

  classDisplayedColumns: string[] = ['grade','teacher', 'total'];
  studentDisplayedColumns: string[] = ['name', 'phone', 'email'];
  columnsToDisplayWithExpand = [...this.classDisplayedColumns, 'expand'];

  expandedElement: any;
  isLoadingRow: boolean = false;
  private classService: ClassService;


  constructor(private http: HttpClient, private router: Router) {
    this.classService = new ClassService(this.http);

    this.classService.findAll().subscribe({
      next: (n) => {
        this.classDataSource.data = n.content
      }
    });
  }

  ngOnInit(): void {
  }

  rowClicked(row: IClass) {
    this.id = row.id!;
    this.expandedElement = this.expandedElement === row ? null : row;
    console.log(row)
    this.studentDataSource.data = row.students;

  }

  setPage($event: PageEvent) {

  }

  editClick() {
    this.router.navigateByUrl('/main/cadastroclass/' + this.id)
  }

  studentClicked(row: any) {
    console.log(row);
  }
}
