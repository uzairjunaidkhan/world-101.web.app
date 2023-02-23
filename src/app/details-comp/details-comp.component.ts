import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../shared.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-comp',
  templateUrl: './details-comp.component.html',
  styleUrls: ['./details-comp.component.css']
})
export class DetailsCompComponent implements OnInit {

  constructor(private http: HttpClient, private shared:SharedService, private route:ActivatedRoute) { }


  id:any;
  rowData3:any;
  rowData2:any;
  rowData4:any;

  ngOnInit(): void {
    
    // this.message=this.shared.getMessage;
    //   debugger
      this.id=this.route.snapshot.params['id'];
      console.log(this.id);
   
      this.findId()
  }

  findId(){
    this.http.get("https://restcountries.com/v3.1/name/"+this.id).subscribe(
    data => {
      this.rowData3 = data;
      this.rowData2 = this.rowData3;
      // console.log(JSON.stringify(this.rowData2));
    });
  }


}
