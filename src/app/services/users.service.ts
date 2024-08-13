import { inject, Injectable, signal } from '@angular/core';
import { User, UsersResponse } from '@/interfaces/req-response';
import { HttpClient } from '@angular/common/http';

interface State {
    users: User[];
    loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

    private http = inject( HttpClient);

    #state = signal<State>({
        loading: true,
        users: [],
    })

  constructor() {
    this.http.get<UsersResponse>('https://reqres.in/api/users');
   }
}
