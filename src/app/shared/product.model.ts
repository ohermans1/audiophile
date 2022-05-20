import { InBox } from './inBox.model';

export class Product {
  constructor(
    public type: string,
    public isNew: boolean,
    public header: string,
    public description: string,
    public cost: number,
    public imgURL: string,
    public imgMainURL: string,
    public inBox: InBox[],
    public features: string,
    public galleryImgs: string[],
    public cartImage: string
  ) {}
}
