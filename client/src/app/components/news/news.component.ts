import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {

  dataForecast: any = [];

  constructor(private http: HttpClient) {
    this.http.get<WeatherForecast>('http://localhost:5220/weatherforecast').subscribe(forecastData => {
      console.log(forecastData);
      this.dataForecast = forecastData;
    })
  }

}
