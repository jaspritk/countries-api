import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { Console } from 'console';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cards: any = [];
  searchByName: any;
  p: number = 1;

  constructor(private apiService: ApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.allData()
  }

  allData() {
    this.apiService.getAllCountries().subscribe(result => {
      this.cards = result;
      console.log("results >>> ", this.cards)
    })
  }

  gotoDetails(card: any) {
    this.router.navigate(['/details'], {
      queryParams: { name: card.name },
    });
  }

}
