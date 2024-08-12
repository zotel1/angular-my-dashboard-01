import { Injectable } from '@angular/core';

interface State {
    users: any[];
    loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

    

  constructor() { }
}
