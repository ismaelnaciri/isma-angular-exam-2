import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  constructor(private http: HttpClient) {
    // this.ex3_post();
    this.ex4_post();
  }

  ex3_post() {
    // this.http.post<any>("http://localhost:3080/ex3", {}).subscribe();
  }
  ex4_post() {
    this.http.post<any>("http://localhost:3080/ex4", {}).subscribe();
  }

}
