import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectComponent } from './project/project.component';
import { TaskbarComponent } from './taskbar/taskbar.component';
import { GithubPortfolioService } from './github-portfolio.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ProjectCardComponent,
    ProjectComponent,
    TaskbarComponent
  ],
  imports: [
    BrowserModule ,
    HttpClientModule
  ],
  providers: [GithubPortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
