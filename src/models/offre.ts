export interface Offre {
    id: number;
    date: Date;
    title: string;
    idEntreprise : number;
    description : String;
    location : String;
    remote : String;
    easyApply : boolean;
}