import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../shared.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-countries-comp',
  templateUrl: './countries-comp.component.html',
  styleUrls: ['./countries-comp.component.css']
})
export class CountriesCompComponent implements OnInit {
  
  constructor(private http: HttpClient, private shared:SharedService) { }

  // message:any;
  
  id:any;
  rowData:any;
  rowData1:any;
  
  ngOnInit(){

  this.http.get("https://restcountries.com/v3.1/all").subscribe(
    data => {
      this.rowData = data;
      this.rowData1 = this.rowData;
      // console.log(this.rowData);
    });
    
  }
  // findid(indxVal:any){

  findid(){

    
    // this.id=this.rowData1.name.common;
    // console.log(indxVal);
    // var number=document.getElementById("i");
    //     alert(this.rowData1[indxVal].name.common);
    //     let a:string=this.rowData1[indxVal].name.common;
    //     this.shared.setMessage(a);

  }
  

}
