import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {

  detail: any = [];
  languages: any = [];
  borderCountries: any = [];
  loader = true;

  allCountries: any = [];

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      // console.log(params);
      // debugger
      this.apiService.getCountryDetails(params['code']).subscribe((response: any) => {
        this.detail = response
        this.languages = response.languages ?? []
        this.borderCountries = response.borders ?? []
        this.loader = false;

        console.log("response", this.detail);
      });
    });
  }

  gotoDashboard() {
    this.router.navigate(['/dashboard'])
  }


  // allData() {
  //   this.apiService.getAllCountries().subscribe(result => {
  //     this.allCountries = result;
  //     console.log("results all countries>>> ", this.allCountries)
  //   })
  // }

  gotoCountry(response: any) {
    // debugger
    this.router.navigate(['/details'], {
      queryParams: { code: response },
    });
  }

}
