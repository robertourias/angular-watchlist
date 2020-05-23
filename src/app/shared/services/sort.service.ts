import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortService {

  constructor() { }

  sortItems(list: any[]): void {
    // Código para ordenar o Array de forma aletória
    for (let i = 0; i < list.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
    }

    console.log(list);
  }
}
