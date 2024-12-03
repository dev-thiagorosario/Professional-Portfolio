import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { dataFake } from '../../data/datafake';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit{

  ContentPhoto:string=""
  ContentTitle:string=""
  ContentSubtitle: string =""
  NewsContent:string=""
  private id:string | null="0"

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get('id')
    )

    this.setValuesToComponent(this.id)
}

setValuesToComponent(id:string | null){
  const result = dataFake.filter(
    article => article.id === id)[0]
    this.ContentTitle = result.title
    this.ContentPhoto = result.photo
    this.ContentSubtitle = result.subtitle
    this.NewsContent  = result.description

}


}
