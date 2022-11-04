import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Endereco } from '../interfaces/endereco';

@Injectable({
  providedIn: 'root'
})
export class ViacepApiService {

  private readonly urlViaCep = 'https://viacep.com.br/ws/'

  constructor(
    private http: HttpClient
  ) { }

  procurarCEP(cep: string){
    return this.http.get<Endereco>(this.urlViaCep + cep + '/json/')
  }
}
