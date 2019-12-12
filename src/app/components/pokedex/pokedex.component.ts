import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.less']
})
export class PokedexComponent implements OnInit {
  public title : string;
  public subtitle : string;
  public placeholderInput :string;
  public bottonSearch : string;
  constructor() { 
    this.title = "Search";
    this.subtitle ="search by name of the pokemon";
    this.placeholderInput ="Ditto, Charizard...";
    this.bottonSearch = "Search";
  }

  ngOnInit() {
  }

}
