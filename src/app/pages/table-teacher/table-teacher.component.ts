import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { ITeacher } from '../../models/teacher';

@Component({
  selector: 'app-table-teacher',
  templateUrl: './table-teacher.component.html',
  styleUrls: ['./table-teacher.component.scss']
})
export class TableTeacherComponent {

  displayedColumns = [
    'Nome',
    'Telefone',
    'E-mail',
    'País',
    'Cidade',
    'Bairro',
    'Estado'
  ];
  dataSource = new MatTableDataSource<ITeacher>(ELEMENT_DATA);

}

const ELEMENT_DATA: ITeacher[] = [
  {
    name: "Hiara Peixoto",
    phone: "81998969698",
    email: "hiara.peixoto@dominio.com.br",
    salary: "R$ 10.000.000,00",
    country: "Brasil",
    city: "São Paulo",
    street: "Rua Gestão de Pessoas",
    district: "Centro",
    cep: "00000-00",
    state: "SP",
    number: 3
  },
  {
    name: "Hiara Peixoto",
    phone: "81998969698",
    email: "hiara.peixoto@dominio.com.br",
    salary: "R$ 10.000.000,00",
    country: "Brasil",
    city: "São Paulo",
    street: "Rua Gestão de Pessoas",
    district: "Centro",
    cep: "00000-00",
    state: "SP",
    number: 3
  },
  {
    name: "Hiara Peixoto",
    phone: "81998969698",
    email: "hiara.peixoto@dominio.com.br",
    salary: "R$ 10.000.000,00",
    country: "Brasil",
    city: "São Paulo",
    street: "Rua Gestão de Pessoas",
    district: "Centro",
    cep: "00000-00",
    state: "SP",
    number: 3
  },
  {
    name: "Hiara Peixoto",
    phone: "81998969698",
    email: "hiara.peixoto@dominio.com.br",
    salary: "R$ 10.000.000,00",
    country: "Brasil",
    city: "São Paulo",
    street: "Rua Gestão de Pessoas",
    district: "Centro",
    cep: "00000-00",
    state: "SP",
    number: 3
  },
  {
    name: "Hiara Peixoto",
    phone: "81998969698",
    email: "hiara.peixoto@dominio.com.br",
    salary: "R$ 10.000.000,00",
    country: "Brasil",
    city: "São Paulo",
    street: "Rua Gestão de Pessoas",
    district: "Centro",
    cep: "00000-00",
    state: "SP",
    number: 3
  },
  {
    name: "Hiara Peixoto",
    phone: "81998969698",
    email: "hiara.peixoto@dominio.com.br",
    salary: "R$ 10.000.000,00",
    country: "Brasil",
    city: "São Paulo",
    street: "Rua Gestão de Pessoas",
    district: "Centro",
    cep: "00000-00",
    state: "SP",
    number: 3
  },
  {
    name: "Hiara Peixoto",
    phone: "81998969698",
    email: "hiara.peixoto@dominio.com.br",
    salary: "R$ 10.000.000,00",
    country: "Brasil",
    city: "São Paulo",
    street: "Rua Gestão de Pessoas",
    district: "Centro",
    cep: "00000-00",
    state: "SP",
    number: 3
  }
];
