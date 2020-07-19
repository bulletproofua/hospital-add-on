export interface StoreData {
    group: Array<Group>;
}

export interface Group {
    id: string;
    title: string;
    subGroup: Array<SubGroup>;
} 

export interface SubGroup {
    id: string;
    title: string;
    elements: Array<SubGroupElement>;
} 

export interface SubGroupElement {
    id: string;
    title: string;
    value: string;
} 
