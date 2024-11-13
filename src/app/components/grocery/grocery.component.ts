import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Grocery } from 'src/models/grocery.model';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css']
})
export class GroceryComponent {

  groceries$?:Observable<Grocery[]>;

constructor(private store: Store<{groceries: Grocery[]}>){
}

  onTypeChange(event: Event){

  }


  increment(item:Grocery){
    const payload = {
      id:item.id,
      name:item.name,
      quantity:1
    }

  }
  decrement(item:Grocery){
    const payload = {
      id:item.id,
      name:item.name
    }


  }

}
