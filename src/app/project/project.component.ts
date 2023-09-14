import { Component } from '@angular/core';
import { Projet } from 'src/model/model';
import { GithubPortfolioService } from '../github-portfolio.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  constructor(private githutrepos : GithubPortfolioService){}
  test = [];
  ngOnInit() : void{
    this.fetchGitData("soratarellik");
  }
  fetchGitData(name : string){
    this.githutrepos.getGithubData(name).subscribe(data=>{
      console.log(data) 
    });
  }

}
