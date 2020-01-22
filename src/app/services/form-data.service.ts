import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Form_Data } from './form-data-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  _url = "/assets/data/form_data.json"

  constructor(private http: HttpClient) { }

  getformData(): Observable<Form_Data[]> {
    return this.http.get<Form_Data[]>(this._url);
  }
}
