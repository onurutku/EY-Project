export class Product {
  constructor(
    public description: string,
    public id: number,
    public image: string,
    public price: number,
    public quantity: number | string,
    public title: string,
    public file: string,
     public lat: string,
     public lng: string
  ) {
    (this.description = description),
      (this.id = id),
      (this.image = image),
      (this.price = price),
      (this.quantity = quantity),
      (this.file = file),
      (this.lat = lat),
      (this.lng = lng),
      (this.title = title);
  }
}
