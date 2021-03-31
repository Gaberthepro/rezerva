import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  array: any;
  top:any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    /*let res = this.http.get("https://app.sportdataapi.com/api/v1/soccer/matches?apikey=2f2b7820-86f4-11eb-b165-0792cfd2240a&season_id=1511&date_from=2021-03-16&date_to=2021-03-22");
    res.subscribe((data) => {
      this.array = data;
      this.array = this.array.data;
    });*/

    /*let a = this.http.get("https://app.sportdataapi.com/api/v1/soccer/topscorers?apikey=2f2b7820-86f4-11eb-b165-0792cfd2240a&season_id=1511");
    a.subscribe((data) => {
      this.top = data;
      this.top = this.top.data;

    })*/
    
  }
}

