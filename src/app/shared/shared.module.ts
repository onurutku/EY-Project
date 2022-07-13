import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterByNamePipe } from './pipes/filter-by-name.pipe';
import { DetailModalComponent } from './components/detail-modal/detail-modal.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [FilterByNamePipe, DetailModalComponent],
  imports: [CommonModule, FormsModule, NgxDatatableModule],
  exports: [FilterByNamePipe, DetailModalComponent, NgxDatatableModule],
})
export class SharedModule {}
