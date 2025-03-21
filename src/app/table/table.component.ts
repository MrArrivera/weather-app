import { NgFor, CommonModule } from '@angular/common';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-table',
  imports: [NgFor, FormsModule, CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {
  data: any[] = [];
  columns: any[] = [];
  childrenColumns: any[] = [];

  constructor(private dataService: DataService) {}

  filterText: string = '';
  currentPage = 1;
  rowsPerPage = 5;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] && this.data) {
      this.data = this.data.map(row => ({
        ...row,
        isExpand: false
      }));
    }
  }

  ngOnInit(): void {
    this.dataService.countryData$.subscribe(data => this.data = data);
    this.dataService.countryColumns$.subscribe(columns => this.columns = columns);
    this.dataService.childrenColumns$.subscribe(columns => this.childrenColumns = columns);
  }

  get filteredData(): any[] {
    if (!this.filterText) {
      return this.data;
    }
  
    const searchTerm = this.filterText.toLowerCase();
    
    // Volver a la página 1 si se aplica un filtro
    this.currentPage = 1;
  
    return this.data.filter((r) =>
      this.columns.some((c) =>
        String(r[c.key]).toLowerCase().includes(searchTerm)
      )
    );
  }
  

  get paginatedData(): any[] {
    const totalPages = Math.ceil(this.filteredData.length / this.rowsPerPage);
    
    // Si la página actual es mayor a las páginas disponibles, ajustarla
    if (this.currentPage > totalPages) {
      this.currentPage = totalPages || 1; // Si no hay resultados, volver a la primera página
    }
  
    const startIndex = (this.currentPage - 1) * this.rowsPerPage;
    const endIndex = startIndex + this.rowsPerPage;
    return this.filteredData.slice(startIndex, endIndex);
  }
  

  get totalPages(): number {
    return Math.ceil(this.filteredData.length / this.rowsPerPage)
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  toggleExpand(row: any) {
    row.isExpand = !row.isExpand;
  }
}
 