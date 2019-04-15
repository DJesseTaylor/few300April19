import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-server-status',
  templateUrl: './server-status.component.html',
  styleUrls: ['./server-status.component.css']
})
export class ServerStatusComponent implements OnInit {

  private url = environment.statusApiUrl;
  status$: Observable<StatusResponce>;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getData() {
    this.status$ = this.http.get<StatusResponce>(this.url);
  }

}

interface StatusResponce {
  message: string;
  at: string;
}
