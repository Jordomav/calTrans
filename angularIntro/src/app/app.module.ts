import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HeroesComponent } from '../app/heroes/heroes';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailComponent } from './detail/detail.component';

import { HeroService } from './hero.service';
import { TodoComponent } from './todo/todo.component';
import { TodoService } from './todo.service';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { UserService } from './user.service';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    DashboardComponent,
    DetailComponent,
    TodoComponent,
    LoginComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [
    HeroService,
    TodoService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
