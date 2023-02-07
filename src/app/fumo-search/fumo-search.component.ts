import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Fumos } from '../Fumos';
import { FumoServiceService } from '../fumo-service.service';


@Component({
  selector: 'app-fumo-search',
  templateUrl: './fumo-search.component.html',
  styleUrls: ['./fumo-search.component.css']
})
export class FumoSearchComponent implements OnInit {
  fumos$!: Observable<Fumos[]>;
  private searchTerms = new Subject<string>();

  constructor(private fumoService: FumoServiceService){ }

  /* poner el termino de busqueda en el observable */
  search(busqueda:string):void{
    this.searchTerms.next(busqueda);
  }

  ngOnInit(): void {
    this.fumos$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((busqueda:string)=> this.fumoService.searchFumos(busqueda))
    )
  }

}
