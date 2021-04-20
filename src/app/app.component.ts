import { Component, OnInit } from '@angular/core';
import { NasaService } from './nasa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'nasa-api'

  public imgOfTheDay: string = '';
  
  private service: NasaService;
  constructor(param_service: NasaService){
    this.service = param_service
  }

  ngOnInit(): void{
    this.service.getImageOfTheDay().subscribe((param_img: string) => {
      this.imgOfTheDay = param_img
    })
  }

}
