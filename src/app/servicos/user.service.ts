import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "https://reqres.in/api/users";      //o site da api

  constructor(private http: HttpClient) { 

  }

  public listaUsuarios(pagina: Number){
    return this.http.get(`${this.url}?page=${pagina}`); //Usando a crase no método get
  }

  public dadoUsuario(id: Number){
    return this.http.get(`${this.url}/${id}`);
  }
}
