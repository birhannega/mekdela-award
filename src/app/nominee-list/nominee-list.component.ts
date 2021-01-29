import { Component, OnInit } from '@angular/core';
import { NomineeApiService } from '../services/nominee-api.service';

@Component({
  selector: 'app-nominee-list',
  templateUrl: './nominee-list.component.html',
  styleUrls: ['./nominee-list.component.css']
})
export class NomineeListComponent implements OnInit {
  CurrentYear: number;
  winner: string;
  numberOfClick:number;
  currentColor:string;
  userList: any;
  Selecteduser:any;
  constructor(private nomineeservice:NomineeApiService ) { }

  ngOnInit(): void {
    this.CurrentYear=2021;
    this.winner= 'Maru Abebe'
    this.numberOfClick=0;
    this.currentColor=this.numberOfClick<10?'black':'green';
   // this.currentColor=0;
    this.ListUser();
  }
  CountClick(){
    this.numberOfClick= this.numberOfClick+1;
  }

  ListUser(){
    this.nomineeservice.getUsers().subscribe(res=>{
      this.winner=res[0].name;
      this.userList= res
    }
   
     
    );
  }
  ShowCurrentUserDetail(user: any){
      console.log('Selected user', user);
      this.Selecteduser= user;
  }

  FetchUserDetail(id:number){
this.nomineeservice.getUserById(id).subscribe(user=>console.log("user",user))
  }
}
