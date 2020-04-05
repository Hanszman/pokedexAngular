import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../../servicos/pokeapi.service'; 

@Component({
  selector: 'app-tipo',
  templateUrl: './tipo.component.html',
  styleUrls: ['./tipo.component.css']
})
export class TipoComponent implements OnInit {

  listTipos: any;

  constructor(private pokeapiService: PokeapiService) { }

  ngOnInit(): void {
    this.listarTipos()
  }

  listarTipos(): void {
    this.pokeapiService.getTodosType().subscribe(resp => {
      this.listTipos = resp.body.results;
      console.log(this.listTipos);
    })
  }

}
