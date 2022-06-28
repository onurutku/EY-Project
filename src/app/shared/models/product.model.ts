export class Product {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public price: number,
    public image: string,
    public quantity: string
  ) {
    (this.id = id),
      (this.title = title),
      (this.description = description),
      (this.price = price),
      (this.quantity = quantity),
      (this.title = title);
  }
}
