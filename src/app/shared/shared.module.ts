import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterByNamePipe } from './pipes/filter-by-name.pipe';
import { DetailModalComponent } from './components/detail-modal/detail-modal.component';

@NgModule({
  declarations: [FilterByNamePipe, DetailModalComponent],
  imports: [CommonModule, FormsModule],
  exports: [FilterByNamePipe, DetailModalComponent],
})
export class SharedModule {}
