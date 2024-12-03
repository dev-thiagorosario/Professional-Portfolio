import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-big-card',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css'] // Corrigido para "styleUrls"
})
export class BigCardComponent implements OnInit {


  @Input() photoCover: string = "";
  @Input() cardTitle: string = "";
  @Input() cardSubtitle: string = "";
  @Input() cardDescription: string = "";
  @Input() Id: string="";

  constructor() {}

  ngOnInit(): void {}
}
