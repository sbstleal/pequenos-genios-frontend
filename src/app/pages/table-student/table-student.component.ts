import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { IStudent } from '../../models/student';

@Component({
  selector: 'app-table-student',
  templateUrl: './table-student.component.html',
  styleUrls: ['./table-student.component.scss'],
})
export class TableStudentComponent {
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
  dataSource = new MatTableDataSource<IStudent>(ELEMENT_DATA);
}

const ELEMENT_DATA: IStudent[] = [
  {
    name: 'Carlos',
    phoneNumber: '83988350839',
    fee: 122.79,
    email: 'sbstleal@gmail.com',
    address: {
    street: 'Rua da Silva',
    city: 'Natal',
    country: 'Brasil',
    postalCode: '58085330',
    state: 'Rio Grande do Norte',
    number: 154
    }
  },
  {
    name: 'Carlos',
    phoneNumber: '83988350839',
    fee: 122.79,
    email: 'sbstleal@gmail.com',
    address: {
    street: 'Rua da Silva',
    city: 'Natal',
    country: 'Brasil',
    postalCode: '58085330',
    state: 'Rio Grande do Norte',
    number: 154
    }
  },  {
    name: 'Carlos',
    phoneNumber: '83988350839',
    fee: 122.79,
    email: 'sbstleal@gmail.com',
    address: {
    street: 'Rua da Silva',
    city: 'Natal',
    country: 'Brasil',
    postalCode: '58085330',
    state: 'Rio Grande do Norte',
    number: 154
    }
  },  {
    name: 'Carlos',
    phoneNumber: '83988350839',
    fee: 122.79,
    email: 'sbstleal@gmail.com',
    address: {
    street: 'Rua da Silva',
    city: 'Natal',
    country: 'Brasil',
    postalCode: '58085330',
    state: 'Rio Grande do Norte',
    number: 154
    }
  },  {
    name: 'Carlos',
    phoneNumber: '83988350839',
    fee: 122.79,
    email: 'sbstleal@gmail.com',
    address: {
    street: 'Rua da Silva',
    city: 'Natal',
    country: 'Brasil',
    postalCode: '58085330',
    state: 'Rio Grande do Norte',
    number: 154
    }
  },  {
    name: 'Carlos',
    phoneNumber: '83988350839',
    fee: 122.79,
    email: 'sbstleal@gmail.com',
    address: {
    street: 'Rua da Silva',
    city: 'Natal',
    country: 'Brasil',
    postalCode: '58085330',
    state: 'Rio Grande do Norte',
    number: 154
    }
  },
];
