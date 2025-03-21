import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TableComponent } from "./table/table.component";
import { CommonModule } from '@angular/common';
import { CardWeatherComponent } from "./card-weather/card-weather.component";
import { DataService } from './data.service';

interface Country {
  name: string;
  capital: string;
  weather: number;
  weatherType: string;
  children: { name: string; weather: number }[];
}


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'weather-app';
  constructor(private dataService: DataService) {
    const countryData: Country[] = [
      { 
        name: 'Mexico', 
        capital: 'CDMX', 
        weather: 24,
        weatherType: 'cloudy',
        children: [
          { name: 'CDMX', weather: 24 },
          { name: 'Jalisco', weather: 30 },
          { name: 'Nuevo Leon', weather: 32 }
        ]
      },
      { 
        name: 'USA', 
        capital: 'Washington', 
        weather: 10,
        weatherType: 'clear',
        children: [
          { name: 'California', weather: 20 },
          { name: 'Texas', weather: 35 },
          { name: 'Florida', weather: 28 }
        ]
      },
      { 
        name: 'Colombia', 
        capital: 'Bogota', 
        weather: 25,
        weatherType: 'cloudy',
        children: [
          { name: 'Antioquia', weather: 27 },
          { name: 'Valle del Cauca', weather: 29 },
          { name: 'Cundinamarca', weather: 24 }
        ]
      },
      { 
        name: 'Canada', 
        capital: 'Ottawa', 
        weather: 5,
        weatherType: 'clear',
        children: [
          { name: 'Ontario', weather: 6 },
          { name: 'Quebec', weather: -2 },
          { name: 'British Columbia', weather: 8 }
        ]
      },
      { 
        name: 'Brazil', 
        capital: 'Brasilia', 
        weather: 30,
        weatherType: 'clear',
        children: [
          { name: 'Sao Paulo', weather: 33 },
          { name: 'Rio de Janeiro', weather: 28 },
          { name: 'Minas Gerais', weather: 29 }
        ]
      },
      { 
        name: 'Argentina', 
        capital: 'Buenos Aires', 
        weather: 28,
        weatherType: 'cloudy',
        children: [
          { name: 'Buenos Aires', weather: 28 },
          { name: 'Cordoba', weather: 30 },
          { name: 'Santa Fe', weather: 29 }
        ]
      },
      { 
        name: 'Chile', 
        capital: 'Santiago', 
        weather: 20,
        weatherType: 'cloudy',
        children: [
          { name: 'Santiago', weather: 20 },
          { name: 'Valparaiso', weather: 22 },
          { name: 'Biobio', weather: 19 }
        ]
      },
      { 
        name: 'Peru', 
        capital: 'Lima',
        weatherType: 'clear',
        weather: 22, 
        children: [
          { name: 'Lima', weather: 22 },
          { name: 'Arequipa', weather: 25 },
          { name: 'La Libertad', weather: 23 }
        ]
      }
    ];
    const countryColumns = [
      { key: 'name', label: 'Name' },
      { key: 'capital', label: 'Capital' },
      { key: 'weather', label: 'Weather' },
      { key: 'weatherType', label: 'Weather Type' }
    ];
    const childrenColumns = [
      { key: 'name', label: 'State Name' },
      { key: 'weather', label: 'State Weather' }
    ];

    this.dataService.setCountryData(countryData);
    this.dataService.setCountryColumns(countryColumns);
    this.dataService.setChildrenColumns(childrenColumns);
  }

}
