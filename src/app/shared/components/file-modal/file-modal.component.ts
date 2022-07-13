import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-file-modal',
  templateUrl: './file-modal.component.html',
  styleUrls: ['./file-modal.component.scss'],
})
export class FileModalComponent implements OnInit {
  @Input() file!: string;
  @Output() closeModalEvent = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}
  closeModal() {
    this.closeModalEvent.emit(true);
  }
}
