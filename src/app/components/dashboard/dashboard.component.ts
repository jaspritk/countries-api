import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { Console } from 'console';
import { ApiService } from 'src/app/services/api.service';

// import { MatPaginator, PageEvent } from '@angular/material/paginator';

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

  constructor(private apiService: ApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

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

  // hideloader() {
  //   document.getElementById('loading').style.display = 'none';
  // }

  gotoDetails(card: any) {
    this.router.navigate(['/details'], {
      queryParams: { alpha2Code: card.alpha2Code },
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
    // this.router.navigate(['/dashboard'], {
    //   queryParams: { region: this.cards.region },
    // });
    this.cards = result;
  }

}