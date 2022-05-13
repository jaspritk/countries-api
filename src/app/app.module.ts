import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DetailsComponent } from './components/details/details.component';
import { HeaderComponent } from './shared/header/header.component';


import { HttpClientModule } from '@angular/common/http';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatPaginatorModule } from '@angular/material/paginator';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { FilterByRegionPipe } from './shared/pipes/filter-by-region.pipe';

import { JwPaginationModule } from 'jw-angular-pagination';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DetailsComponent,
    HeaderComponent,
    FilterPipe,
    FilterByRegionPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,
    // Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule,
    JwPaginationModule,
    NgxPaginationModule,
    // BrowserAnimationsModule,
    // MatPaginatorModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
