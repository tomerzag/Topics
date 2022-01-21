import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchInputModule } from '../search-input/search-input.module';
import { FilterPipe } from 'src/app/core/pipes/filter/filter.pipe';
import { SidebarModule } from '../sidebar/sidebar.module';
import { PaginationModule } from '../pagination/pagination.module';
import { TopPipe } from 'src/app/core/pipes/top/top.pipe';
import { TopicsModule } from '../topics/topics.module';

const routes : Routes = [{
  path: '',
  component: HomeComponent
}]

@NgModule({
  declarations: [
    HomeComponent,
    FilterPipe,
    TopPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TopicsModule,
    SearchInputModule,
    SidebarModule,
    PaginationModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
