import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NomineeApiService {


  constructor(private httpClient: HttpClient) {

   }
   getUsers(){
     return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
   }
   getUserById(id: number){
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users/'+id);
  }


}
