import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class SearchBarService {

  constructor(private http: HttpClient) {
  }

  searchText(model: string, search: string) {
    return this.http.get(`${environment.backend}/${model}/name/${search}`)
  }

}
