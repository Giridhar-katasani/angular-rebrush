import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BehaviouralSubjectService } from '../services/behavioural.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private behaviouralService: BehaviouralSubjectService) { 
    // this.searchInput 
  }

  @ViewChild('searchInput') searchInput!: ElementRef;

  ngOnInit(): void {
    if(this.searchInput) {
      this.searchInput.nativeElement.value = "";
    }
  }

  onSearchInput() {
    this.behaviouralService.setSearchQuery(this.searchInput.nativeElement.value);
  }

}
