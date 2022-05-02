import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders }    from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(private http:HttpClient) { }

  getData():Promise<any>{
    return this.http.get("https://jsonplaceholder.typicode.com/todos").toPromise();

  }

}