import { Component, OnInit } from '@angular/core';
import { SortService } from 'src/app/shared/services/sort.service';

@Component({
  selector: 'app-my-list',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.scss']
})
export class MyListComponent implements OnInit {
  list = [];
  viewedList = [];

  constructor(private sortService: SortService) { }

  ngOnInit() {
    this.list = [
      {
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn1.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcSDiNL4mplz50DO7jRQSjQZVuzqlvG-Kq5pfxK6DNKQQPbL2N2w&psig=AOvVaw2Q_4meutJ7If7tPVficRB2&ust=1590345578948000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPCSr4zRyukCFQAAAAAdAAAAABAD',
        name: 'Mulan'
      },
      {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMwtU95JygcmCq4e3XPpL9W0ATjGFoQCQm16dbpIp7BM36B7lH',
        name: 'Vingadores: Ultimato'
      },
      {
        image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQJmbajoepvv5M8KO0eev1s80qkpthWlbLvWR1L0BsMat307ypG',
        name: 'Parasita'
      },
      {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBR98_qi1DbdOmqsmqEUWpsAVaCyz0gg-cAtScmkXl8j9KoKvj',
        name: 'Frozen 2'
      }
    ];

    this.viewedList = [
      {
        image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS4neC_Y4U1G6u2QlEFqbCizheGBUnZg1w874qWbIcVlv9tPuSu',
        name: 'Vingadores'
      },
      {
        image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRfHd-mM9MgWeQNmyKNg-dKuNcCaNVP8EOstPbFLz-JaBdIZ8wA',
        name: 'Divertidamente'
      },
      {
        image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRB6hcDB3u8PZsRafyFsdOYdo7LUoy84J9z-2rDCuonmh07qhvp',
        name: 'Corra'
      }
    ];

    this.sortService.sortItems(this.list);
  }

}
