import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SearchInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [SearchInputComponent]
})
export class SearchInputModule { }
