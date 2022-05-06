import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  detail: any = [];
  languages: any = [];

  constructor(private apiService: ApiService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      console.log(params);

      this.apiService.getAllDetails(params['name']).subscribe((response) => {
        console.log("response", response);
        this.detail = response

        console.log("This.details", this.detail);

      });
    });

  }


}
