import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input()
  photoCover: string = "https://www.einerd.com.br/wp-content/uploads/2019/08/Vingadores-Ultimato-Eu-sou-o-Homem-de-Ferro-capa-890x466.jpg";

  @Input()
  contentTitle: string = "MINHA NOTICIA";

  @Input()
  contentDescription: string = "ola mundo";

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value => console.log(value.get("Id")))
  }

}
