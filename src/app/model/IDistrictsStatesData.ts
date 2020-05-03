export interface IDistrictsStatesData {
    statesMap: Map<string, IStateData>
}

export interface IStateData {
    districtData: Map<string, IDistrictData[]>;
    statecode: string;
}

export interface IDistrictData {
    confirmed: number;
    deceased: number;
    recovered: number;
    active: number;
}