import { Encomenda } from '../shared/models/encomendas';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class EncomendasService {
    /*
       url da api tabela fipe
    */
    private Url: string = 'http://localhost:3100/encomendas';


    constructor(private httpClient: HttpClient) { }
    /*
     funcao que ao ser chamada retorna um array de marcas atraves de uma requisicao na api
    */
    
        save(encomenda: Encomenda): Observable<Encomenda> { 
            
        return this.httpClient.post<Encomenda>(`${this.Url}`, encomenda);
            
        }
    

    /*
     funcao que ao ser chamada retorna um array de modelos conforme o parametro id passado
    */
    
}