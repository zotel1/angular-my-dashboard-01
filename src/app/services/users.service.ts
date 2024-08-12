import { inject, Injectable, signal } from '@angular/core';
import { User } from '../interfaces/req-response';
import { HttpClient } from '@angular/common/http';

interface State {
    users: User[];
    loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

    private http = inject( HttpClient)

    #state = signal<State>({
        loading: true,
        users: [],
    })

  constructor() {
    console.log('Cargando data...')
   }
}
