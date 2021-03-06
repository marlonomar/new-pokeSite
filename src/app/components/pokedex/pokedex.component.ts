import { Component, OnInit }  from '@angular/core';
import {  PokedexService }    from '../../services/pokedex';
import { Pokedex }            from '../../models/pokedex';

@Component({
  selector    : 'app-pokedex',
  templateUrl : './pokedex.component.html',
  styleUrls   : ['./pokedex.component.less'],
  providers   :[PokedexService]
})
export class PokedexComponent implements OnInit {
  public title            : string;
  public subtitle         : string;
  public placeholderInput : string;
  public bottonSearch     : string;
  public pokedex          : Array<Pokedex>;
  public activatePokedex  : boolean;
  public pokemon          :string;
  public types            :[any];


  constructor(
   private _pokedexService: PokedexService
  ) { 
    this.title            = "Search";
    this.subtitle         = "search by name of the pokemon";
    this.placeholderInput = "Ditto, Charizard...";
    this.bottonSearch     = "Search";

    this.activatePokedex = false;
  }

  getnamepokemon(){
    return  document.getElementsByClassName('search-pokemon')[0].value;
  }

  getPokemonName(){
    this.activatePokedex = true;
    this.pokemon = document.getElementsByClassName('search-pokemon')[0].value;
    //this.pokemon = "ditto";
    this._pokedexService.getPokemon(this.pokemon).subscribe(
      res =>{
        this.pokedex = [ new Pokedex (res.name ,res.order,res.types ,res.stats)];
        //this.types = this.pokedex.stats;
        console.log(this.pokedex[0].type);
      },
      req =>{
        console.log(req)
      }
    )
  }
 
  ngOnInit() {
   
  }

}
