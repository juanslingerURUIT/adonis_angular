import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'yardstick-client';

  usersData: Observable<any> = new Observable<any>();

  constructor (private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getUsersData();
  }

  trackByUser(index: number, item: any): any {
    return item.id;
  }

  private getUsersData(): void {
    this.usersData = this.httpClient.get('http://localhost:3333/api/test');
  }
}
