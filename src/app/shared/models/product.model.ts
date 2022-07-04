export class Product {
  constructor(
    public description: string,
    public id: number,
    public image: string,
    public price: number,
    public quantity: number | string,
    public title: string
  ) {
    (this.description = description),
      (this.id = id),
      (this.image = image),
      (this.price = price),
      (this.quantity = quantity),
      (this.title = title);
  }
}
