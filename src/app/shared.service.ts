import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  message:string= "s";
  
  setMessage(data:string){
    this.message=data;
  }
  getMessage(){
    return this.message;
    
  }
}
