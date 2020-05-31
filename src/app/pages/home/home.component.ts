import { Component, OnInit } from '@angular/core';
import { ApiTmdbService } from 'src/app/shared/services/api-tmdb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  itemList = [];

  constructor(private apiTmdl: ApiTmdbService) { }

  ngOnInit() {
    this.loadItems();
  }

  loadItems() {
    this.apiTmdl.getItems().subscribe((items) => {
      this.itemList = items;
    },
    (error) => {
      console.log(error);
    });
  }

}
