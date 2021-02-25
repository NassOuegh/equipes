import { Component, OnInit } from '@angular/core';
import { EquipeService } from '../equipe.service';

@Component({
  selector: 'app-add-equipe',
  templateUrl: './add-equipe.component.html',
  styleUrls: ['./add-equipe.component.css']
})
export class AddEquipeComponent implements OnInit {

  equipe;

  constructor(private service: EquipeService) { }

  ngOnInit(): void {
    this.equipe = this.service.postEquipe({
      "id": 6,
      "name":"MYTEAM",
      "country": "World"
  })
  }

}
