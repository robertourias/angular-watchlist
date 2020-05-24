import { Component, OnInit } from '@angular/core';
import { SortService } from 'src/app/shared/services/sort.service';
import { LibraryService } from 'src/app/shared/services/library.service';
import { Library } from 'src/app/shared/models/library.model';

@Component({
  selector: 'app-my-list',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.scss']
})
export class MyListComponent implements OnInit {
  list: any[];
  viewedList: Library[];

  constructor(private sortService: SortService, private libraryService: LibraryService) { }

  ngOnInit() {
    this.loadList();
  }

  loadList() {
    this.libraryService.getLibraryItems().subscribe((items) => {
      this.list = items;
      this.sortService.sortItems(items);
    });
  }

}
