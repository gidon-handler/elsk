import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CURRENT_USER } from 'src/app/app.module';
import { User } from 'src/app/models/user';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {

  users$: Observable<any> = this.dataService.getData('list');

  constructor(private router: Router, private dataService: DataService, @Inject(CURRENT_USER ) private user: any) {}

  editUser(user: User | undefined){
     this.user.currentUser = user;
     this.router.navigate(['/user-form'])
  }

}
