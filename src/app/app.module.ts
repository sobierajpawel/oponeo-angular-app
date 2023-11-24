import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { UsersListComponent } from './users-list/users-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AlternativeCasingPipe } from './alternative-casing.pipe';
import { HighlightSearchedPipe } from './highlight-searched.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserDetailsParentComponent } from './user-details/user-details-parent/user-details-parent.component';
import { InformationUserChildComponent } from './user-details/information-user-child/information-user-child.component';
import { TodoItemsChildComponent } from './user-details/todo-items-child/todo-items-child.component';
import { ButtonsChildComponent } from './user-details/buttons-child/buttons-child.component';
import { FormUserComponent } from './form-user/form-user.component';
import { AddTodoItemComponent } from './add-todo-item/add-todo-item.component';
import { EditTodoItemComponent } from './edit-todo-item/edit-todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    UsersListComponent,
    AddUserComponent,
    HomeComponent,
    AlternativeCasingPipe,
    HighlightSearchedPipe,
    EditUserComponent,
    UserDetailsParentComponent,
    InformationUserChildComponent,
    TodoItemsChildComponent,
    ButtonsChildComponent,
    FormUserComponent,
    AddTodoItemComponent,
    EditTodoItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
