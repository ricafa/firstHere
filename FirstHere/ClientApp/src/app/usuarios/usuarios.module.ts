import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsuariosComponent } from './list-usuarios/list-usuarios.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'usuarios', component: ListUsuariosComponent}
    ])
  ],
  declarations: [ListUsuariosComponent]
})
export class UsuariosModule { }
