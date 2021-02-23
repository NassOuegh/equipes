import { Component, OnInit } from '@angular/core';
import { EquipeService } from '../equipe.service';

@Component({
  selector: 'app-list-equipes',
  templateUrl: './list-equipes.component.html',
  styleUrls: ['./list-equipes.component.css']
})
export class ListEquipesComponent implements OnInit {

  equipes;

  constructor(private service: EquipeService) { }

  ngOnInit(): void {
    this.equipes = this.service.getEquipe().subscribe(
      response => {
        this.equipes = response;
        console.log(this.equipes);
    });}

}
