import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterByNamePipe } from './pipes/filter-by-name.pipe';
import { DetailModalComponent } from './components/detail-modal/detail-modal.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FileModalComponent } from './components/file-modal/file-modal.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { CropperModalComponent } from './components/cropper-modal/cropper-modal.component';

@NgModule({
  declarations: [
    FilterByNamePipe,
    DetailModalComponent,
    FileModalComponent,
    CropperModalComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxDatatableModule,
    PdfViewerModule,
    ImageCropperModule,
  ],
  exports: [
    FilterByNamePipe,
    DetailModalComponent,
    NgxDatatableModule,
    PdfViewerModule,
    FileModalComponent,
    ImageCropperModule,
    CropperModalComponent,
  ],
})
export class SharedModule {}
