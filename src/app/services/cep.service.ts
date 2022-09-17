import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {lastValueFrom} from 'rxjs';
import {environment} from 'src/environments/environment';

import {Cep} from '../models/cep';

@Injectable({
  providedIn: 'root',
})
export class CepService {
  constructor(public http: HttpClient) {}

  public async getViaCep(cep: string): Promise<Cep | undefined> {
    cep = cep.replace(/-| |\./g, '').trim();
    return await lastValueFrom(this.http
      .get<Cep>(`${environment.cepHost}/ws/${cep}/json/`));
  }
}
