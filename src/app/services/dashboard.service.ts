import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICovid19Data, IDistributedData } from '../model/ICovid19Data';
import { IDistrictsStatesData, IDistrictData } from '../model/IDistrictsStatesData';
import { STATES } from '../common/states';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  states: string[] = STATES;
  private apiStatewiseUrl: string = "https://api.covid19india.org/data.json";
  private apiDistrictwiseUrl: string = "https://api.covid19india.org/state_district_wise.json";
  constructor(private http: HttpClient) { }

  getAllData(): Observable<ICovid19Data> {
    return this.http.get<ICovid19Data>(this.apiStatewiseUrl);
  }

  getAllDistrictsData(): Observable<IDistrictsStatesData> {
    return this.http.get<IDistrictsStatesData>(this.apiDistrictwiseUrl);
  }

  getTotalData(data: IDistributedData[]): IDistributedData {
    for (let d of data) {
      if (d.statecode === "TT") {
        return d;
      }
    }
    return
  }

  getStatesData(data: IDistributedData[]): IDistributedData[] {
    let statesData: IDistributedData[] = [];
    data.filter((d) => {
      return d.statecode !== "TT"
    }).forEach((d) => {
      statesData.push(d);
    })
    return statesData;
  }

  getStateDistrictMap(data: IDistrictsStatesData) : Map<string,IDistrictData[]> {
    let stateDistrictsMap = new Map<string,IDistrictData[]>();
    this.states.forEach((state) => stateDistrictsMap.set(data[state].statecode, data[state].districtData));
    return stateDistrictsMap;
  }

  getDistrictData(data : Map<string,IDistrictData[]>, stateCode: string): IDistrictData[] {
    return data.get(stateCode);
  }
}
