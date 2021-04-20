import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from  "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  private service: HttpClient;
  constructor(param_service: HttpClient) {
    this.service = param_service
  }
  public getImageOfTheDay(): Observable<string> {
    const obs: Observable<any> = this.service.get('https://api.nasa.gov/planetary/apod?api_key=5YezXpxc23EolBadq6imeyiWK1QIrG6Yc9iYx5dq')
    const treatment = (param_data: any) => {
      return param_data.url as string;
    }
    return obs.pipe(map(treatment))
  }
}
