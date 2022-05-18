import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cards: any = [];
  copyCards: any = [];
  regionList: any = [];
  searchByName: any;
  filterByRegion: any = "select";
  p: number = 1;
  loader = true;

  detail: any = [];

  constructor(private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.allData()
  }

  allData() {
    this.apiService.getAllCountries().subscribe(result => {
      this.cards = result;
      this.copyCards = result;
      this.filterRegion();
      this.loader = false;
      console.log("results >>> ", this.cards)
    })
  }

  gotoDetails(card: any) {
    this.router.navigate(['/details'], {
      queryParams: { code: card.alpha2Code },
    });
  }

  filterRegion() {
    console.log("filterbyregion", this.cards)
    this.regionList = [...new Set(this.cards.map((item: any) => item.region))];
    this.regionList.sort();
  }

  onChange(value: any) {
    let result = this.copyCards.filter((s: any) => {
      if (s?.region == value) {
        return s?.name;
      }
    });
    if (result.length == 0) {
      result = this.copyCards;
    }
    this.cards = result;
  }
}