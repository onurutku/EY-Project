import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-detail-modal',
  templateUrl: './detail-modal.component.html',
  styleUrls: ['./detail-modal.component.scss'],
})
export class DetailModalComponent implements OnInit {
  @Input() product!: Product;
  @Output() closeModalEvent = new EventEmitter<boolean>();


  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
   console.log(this.product.lat,this.product.lng);

  }

  closeModal() {
    this.closeModalEvent.emit(true);
  }
  trustSrc() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1819.1936930139295!2d${this.product.lat}!3d${this.product.lng}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34ee0ffd4a075%3A0xff2d8149b3a24fea!2sMebusevleri%2C%20Ergin%20Sk.%20No%3A28%2F5%2C%2006570%20%C3%87ankaya%2FAnkara%2C%20Turkey!5e0!3m2!1sen!2sil!4v1657786869159!5m2!1sen!2sil`);
  }
}
