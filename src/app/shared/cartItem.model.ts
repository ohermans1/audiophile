export class CartItem {
  constructor(
    public addedToCart: boolean,
    public count: number,
    public cost: number,
    public header: string,
    public imageURL: string
  ) {}
}
