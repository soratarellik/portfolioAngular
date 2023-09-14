import { Component, Input } from '@angular/core';
import { Projet } from 'src/model/model';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  constructor () {}
  @Input()
  donnees!: Projet;
  ngOnInit():void{
  }
}
