import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Bucket } from '../../../models/bucket.model';


@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.css']
})
export class BucketComponent {

   myBucket$?:Observable<Bucket[]>;

   constructor(){
   }

}
