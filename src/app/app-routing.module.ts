import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { HomeComponent } from './home/home.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [
  { path: "users", component: UsersListComponent },
  { path: "add-user", component: AddUserComponent},
  { path: "home", component: HomeComponent},
  { path: "edit-users/:id", component: EditUserComponent},
  { path:"", redirectTo:"/home", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
