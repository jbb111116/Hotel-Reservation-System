import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  user$: Object;

  constructor(private userData: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.user$ = params.id);

  }

  ngOnInit() {
    this.userData.getUser(this.user$).subscribe(
      result =>  this.user$ = result
    );
  }

}
