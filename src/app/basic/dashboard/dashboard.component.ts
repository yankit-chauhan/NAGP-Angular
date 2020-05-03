import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { IDistributedData } from 'src/app/model/ICovid19Data';
import { IDistrictData } from 'src/app/model/IDistrictsStatesData';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  pageTitle: string = "Dashboard";
  countryData: IDistributedData;
  statesData: IDistributedData[];
  districtsData: Map<string, IDistrictData[]>;
  districtData: IDistrictData[];
  displayedColumns: string[] = ['state', 'confirmed', 'active', 'recovered', 'deaths'];
  districtColumns: string[] = ['district', 'confirmed', 'active', 'recovered', 'deceased'];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.getCovid19Data();
    this.getAllDistrictsData();
  }

  getCovid19Data() {
    this.dashboardService.getAllData().subscribe(data => {
      this.countryData = this.dashboardService.getTotalData(data.statewise);
      this.statesData = this.dashboardService.getStatesData(data.statewise);
    });
  }

  getAllDistrictsData() {
    this.dashboardService.getAllDistrictsData().subscribe(data => {
      this.districtsData = this.dashboardService.getStateDistrictMap(data);
    });
  }
  getDistrictData(row: IDistributedData) {
    this.districtData = this.dashboardService.getDistrictData(this.districtsData, row.statecode);
    console.log(this.districtData);
  }

  scrollTo(className: string):void {
    const elementList = document.querySelectorAll(className);
    const element = elementList[0] as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
