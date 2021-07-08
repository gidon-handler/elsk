import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { UserFormComponent } from './components/user-form/user-form.component';

const routes: Routes = [
  {path: '', component: ListComponent},
  {path: 'user-form', component: UserFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
