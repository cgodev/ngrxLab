import { Component, OnInit } from '@angular/core';
import { pluck } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  usuarios: User[] = [];

  constructor( public usuarioService: UserService ) { }

  ngOnInit(): void {

    this.usuarioService.getUsers().subscribe( (users: any) => this.usuarios = users );
  }

}
