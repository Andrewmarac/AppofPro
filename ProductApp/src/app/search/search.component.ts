import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  query:string;
  obsprod:Observable<Object>;
  results:any;
  constructor(public products: DataService) { }
  submit(query:HTMLInputElement): void{
    if(!query.value){
      return;
    }
    this.query = query.value;
    this.obsprod = this.products.searchprod(this.query);
    this.obsprod.subscribe((data) => this.results = data);
  }

  ngOnInit(): void {
  }

}
