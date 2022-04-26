import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { pluck, Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { loadUsers } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit, OnDestroy {

  usuarios: User[] = [];
  loading: boolean = false;
  error: any;
  usersSubscription: Subscription = new Subscription();

  constructor( 
    private store: Store<AppState> ) { }

  ngOnInit(): void {

    this.usersSubscription = this.store.select('users').subscribe(
      ({users, loading, error}) => {
        this.usuarios = users;
        this.loading = loading;
        this.error = error;
      }
    )

    this.store.dispatch( loadUsers() );
    
  }

  ngOnDestroy(){
    this.usersSubscription.unsubscribe();
  }

}
