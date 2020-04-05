import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { TipoComponent } from './componentes/tipo/tipo.component';
import { RegiaoComponent } from './componentes/regiao/regiao.component';
import { PokemonComponent } from './componentes/pokemon/pokemon.component';
import { PokeapiService } from './servicos/pokeapi.service'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TipoComponent,
    RegiaoComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PokeapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
