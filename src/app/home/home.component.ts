import { Component, OnInit } from '@angular/core';
import { CardWeatherComponent } from '../card-weather/card-weather.component';
import { CommonModule, NgFor } from '@angular/common';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  imports: [CardWeatherComponent, CommonModule, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  countryData: any[] = [];
  countryColumns: any[] = [];
  childrenColumns: any[] = [];

  constructor(private dataService: DataService) {}

  isModalOpen = false;

  today = new Date();

  ngOnInit(): void {
    this.dataService.countryData$.subscribe(data => this.countryData = data);
    this.dataService.countryColumns$.subscribe(columns => this.countryColumns = columns);
    this.dataService.childrenColumns$.subscribe(columns => this.childrenColumns = columns);
  }
  
openDialog() {
  this.isModalOpen = true;
  const modal = document.getElementById('mainModal') as HTMLDialogElement;
  modal.showModal();
}

closeDialog() {
  const modal = document.getElementById('mainModal') as HTMLDialogElement;
  modal.close();
  this.isModalOpen = false;
}
}
