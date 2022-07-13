import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-cropper-modal',
  templateUrl: './cropper-modal.component.html',
  styleUrls: ['./cropper-modal.component.scss'],
})
export class CropperModalComponent implements OnInit {
  @Input() openModal!: boolean;
  @Input() imageChangedEvent: any = '';

  @Output() closeModalEvent = new EventEmitter<boolean>();
  @Output() sendCroppedImage = new EventEmitter<any>();
  croppedImage: any = '';
  constructor() {}

  ngOnInit(): void {}
  closeModal() {
    this.closeModalEvent.emit(true);
  }
  cropImage() {
    this.sendCroppedImage.emit(this.croppedImage);
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }
}
