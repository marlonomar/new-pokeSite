import { Component, OnInit } from '@angular/core';
import {  PokedexService } from '../../services/pokedex';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.less'],
  providers :[PokedexService]
})
export class PokedexComponent implements OnInit {
  public title            : string;
  public subtitle         : string;
  public placeholderInput : string;
  public bottonSearch     : string;

  public pokemon          :string;
  public playerName       : string;

  constructor(
   private _pokedexService: PokedexService
  ) { 
    this.title            = "Search";
    this.subtitle         = "search by name of the pokemon";
    this.placeholderInput = "Ditto, Charizard...";
    this.bottonSearch     = "Search";
    
    this.pokemon ="ditto";
  }

  getPokemonName(){
    this._pokedexService.getPokemon(this.pokemon).subscribe(
      res =>{
        console.log(res)
      },
      req =>{
        console.log(req)
      }
    )
  }
 
  ngOnInit() {
   
  }

}
