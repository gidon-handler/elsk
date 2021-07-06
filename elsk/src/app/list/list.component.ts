import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  users$: Observable<any> = this.http.getData('list');

  constructor(private http: DataService) { }

  ngOnInit(): void {
   
  }

}
