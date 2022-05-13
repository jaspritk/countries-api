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


  constructor(private apiService: ApiService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      // console.log(params);

      this.apiService.getAllDetails(params['alpha2Code']).subscribe((response: any) => {
        // console.log("response", response);
        this.detail = response
        this.languages = response.languages
        this.borderCountries = response.borders
        this.loader = false;

        console.log("response", this.detail);

      });
    });

  }

  gotoDashboard() {
    this.router.navigate(['/dashboard'])
  }

}
