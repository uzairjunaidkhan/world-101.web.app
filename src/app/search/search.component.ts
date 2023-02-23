import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search:any;
  rowData3: any;
  rowData2: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  

  findName(){
    // console.log(this.search)
    this.http.get("https://restcountries.com/v3.1/name/"+this.search).subscribe(
    data => {
      this.rowData3 = data;
      this.rowData2 = this.rowData3;
      console.log(this.rowData2);
    });
  }

}
