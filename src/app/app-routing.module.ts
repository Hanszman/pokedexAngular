import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { TipoComponent } from './componentes/tipo/tipo.component';
import { RegiaoComponent } from './componentes/regiao/regiao.component';
import { PokemonComponent } from './componentes/pokemon/pokemon.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home/home', component: HomeComponent },
  { path: 'tipo/tipo', component: TipoComponent },
  { path: 'regiao/regiao', component: RegiaoComponent },
  { path: 'pokemon/pokemon', component: PokemonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
