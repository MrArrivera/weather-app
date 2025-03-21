import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checklist',
  imports: [],
  templateUrl: './checklist.component.html',
  styleUrl: './checklist.component.css'
})
export class ChecklistComponent {
  @Output() close = new EventEmitter<void>();

  closeDialog() {
    this.close.emit();
  }
}
