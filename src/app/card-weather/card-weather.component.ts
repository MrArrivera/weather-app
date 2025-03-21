import { Component, Input } from '@angular/core';
import { NgFor, NgIf, CommonModule  } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-weather',
  imports: [NgIf, FormsModule,CommonModule ],
  templateUrl: './card-weather.component.html',
  styleUrl: './card-weather.component.css'
})
export class CardWeatherComponent {
  @Input() name: string = '';
  @Input() capital: string = '';
  @Input() weather: number = 0;
  @Input() weatherType: string = '';
  @Input() date: Date = new Date();
}
