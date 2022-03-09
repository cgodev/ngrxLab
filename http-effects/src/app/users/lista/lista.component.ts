import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { pluck } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { cargarUsuarios } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  usuarios: User[] = [];
  loading: boolean = false;
  error: any;

  constructor( 
    private store: Store<AppState> ) { }

  ngOnInit(): void {

    this.store.select('users').subscribe(
      ({users, loading, error}) => {
        this.usuarios = users;
        this.loading = loading;
        this.error = error;
      }
    )

    this.store.dispatch( cargarUsuarios() );
    
  }

}
