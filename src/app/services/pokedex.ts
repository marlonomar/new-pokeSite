import { Injectable } from  '@angular/core';
import { HttpClient , HttpHeaders } from  '@angular/common/http';
import { Observable } from  'rxjs/Observable';

@Injectable()
export class PokedexService{
    public url : string;
    constructor(
        public _http : HttpClient
    ){
        this.url = "https://pokeapi.co/api/v2/pokemon/";
    }

    getPokemon(pokemon): Observable <any>{
        return this._http.get(this.url+pokemon)
    }
}

