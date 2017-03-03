import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MediaItemComponent} from './media-item.component';
import {MediaItemListComponent} from './media-item-list.component';
import  { MediaItemFormComponent} from './media-item-form.component';
import {FavoriteDirective} from './favorite.directive';
import {CategoryList} from './category-list.pipe';
import {MediaItemService} from './media-item.service';

var lookUpLists = {
  mediums : ['Movies','Series']
}

@NgModule({
  declarations: [
    AppComponent,MediaItemComponent,MediaItemListComponent
    ,FavoriteDirective,CategoryList,MediaItemFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],

  providers: [MediaItemService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
