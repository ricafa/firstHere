import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../model/usuario.model';
import { Observable } from 'rxjs/Observable';
import {  of } from 'rxjs/observable/99';

@Injectable()
export class UsuarioService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:8080/user-portal/users';

  getUsers() {
     let fakeUsers = [{id: 1, firstName: 'Dhiraj', lastName: 'Ray', email: 'dhiraj@gmail.com'},
     {id: 1, firstName: 'Tom', lastName: 'Jac', email: 'Tom@gmail.com'},
     {id: 1, firstName: 'Hary', lastName: 'Pan', email: 'hary@gmail.com'},
     {id: 1, firstName: 'praks', lastName: 'pb', email: 'praks@gmail.com'},
   ];
    return Observable.of(fakeUsers).delay(5000);
    //return this.http.get<Usuario[]>(this.baseUrl);
  }
}
