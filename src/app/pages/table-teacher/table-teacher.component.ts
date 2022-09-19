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
    'Estado'
  ];
  dataSource = new MatTableDataSource<ITeacher>(ELEMENT_DATA);

}

const ELEMENT_DATA: ITeacher[] = [
  {
    name: "Danilo Aparecido",
    phoneNumber: "81998969698",
    email: "torneseumprogramador@dominio.com.br",
    salary: "R$ 10.000.000,00",
    country: "Brasil",
    city: "São Bernardo do Campo",
    street: "Rua Augusta a 120 km/h",
    postalCode: "00000-00",
    state: "SP",
    number: 3
  },
  {
    name: "Claudio Rapôso",
    phoneNumber: "81998969698",
    email: "claudio.raposo@dominio.com.br",
    salary: "R$ 10.000.000,00",
    country: "Brasil",
    city: "Recife",
    street: "Rua Urbana",
    postalCode: "00000-00",
    state: "PE",
    number: 3
  },
  {
    name: "Victor Farias",
    phoneNumber: "81998969698",
    email: "victor.farias@dominio.com.br",
    salary: "R$ 10.000.000,00",
    country: "Brasil",
    city: "São Paulo",
    street: "Rua Placeholder",
    postalCode: "00000-00",
    state: "SP",
    number: 3
  },
  {
    name: "Isidro Massetto",
    phoneNumber: "81998969698",
    email: "professorisidro@dominio.com.br",
    salary: "R$ 10.000.000,00",
    country: "Brasil",
    city: "São Paulo",
    street: "150th Avenue NE",
    postalCode: "00000-00",
    state: "SP",
    number: 3
  },
  {
    name: "Lylian Toledo",
    phoneNumber: "81998969698",
    email: "lylian.toledo@dominio.com.br",
    salary: "R$ 10.000.000,00",
    country: "Brasil",
    city: "São Paulo",
    street: "Rua Genérica",
    postalCode: "00000-00",
    state: "SP",
    number: 3
  },
  {
    name: "Guilherme Junqueira",
    phoneNumber: "81998969698",
    email: "guilherme.junqueira@dominio.com.br",
    salary: "R$ 10.000.000,00",
    country: "Brasil",
    city: "São Paulo",
    street: "Rua Leadership",
    postalCode: "00000-00",
    state: "SP",
    number: 3
  },
  {
    name: "Hiara Peixoto",
    phoneNumber: "81998969698",
    email: "hiara.peixoto@dominio.com.br",
    salary: "R$ 10.000.000,00",
    country: "Brasil",
    city: "São Paulo",
    street: "Rua Gestão de Pessoas",
    postalCode: "00000-00",
    state: "SP",
    number: 3
  }
];