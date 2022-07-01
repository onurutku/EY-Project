import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-detail-modal',
  templateUrl: './detail-modal.component.html',
  styleUrls: ['./detail-modal.component.scss'],
})
export class DetailModalComponent implements OnInit {
  @Input() product!: Product;
  @Output() closeModalEvent = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}

  closeModal() {
    this.closeModalEvent.emit(true);
  }
}
