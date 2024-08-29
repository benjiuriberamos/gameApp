import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-filter-games',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './filter-games.component.html',
  styleUrl: './filter-games.component.scss'
})
export class FilterGamesComponent {
  search = new FormControl('');
  filterType = new FormControl('title');


  @Output() filter = new EventEmitter<any>();

  updateName() {
    const search = this.search.value || '';
    const filterType = this.filterType.value || 'title';
    this.filter.emit({ search, filterType });
  }
}
