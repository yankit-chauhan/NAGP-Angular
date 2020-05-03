export interface ICovid19Data {
    statewise: IDistributedData[];
}

export interface IDistributedData {
    active: number;
    confirmed: number;
    deaths: number;
    deltaconfirmed: number;
    deltadeaths: number;
    deltarecovered: number;
    lastupdatedtime: Date;
    recovered: number;
    state: string;
    statecode: string;
}