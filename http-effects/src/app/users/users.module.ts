import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { UserComponent } from './user/user.component';



@NgModule({
  declarations: [
    ListaComponent,
    UserComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListaComponent,
    UserComponent
  ]
})
export class UsersModule { }
