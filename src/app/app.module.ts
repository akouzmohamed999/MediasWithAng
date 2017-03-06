import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';

import { AppComponent } from './app.component';
import {MediaItem} from './media-item.interface';
import { MediaItemComponent} from './media-item.component';
import {MediaItemListComponent} from './media-item-list.component';
import  { MediaItemFormComponent} from './media-item-form.component';
import {FavoriteDirective} from './favorite.directive';
import {CategoryList} from './category-list.pipe';
import {ValuesPipe} from './display.pipe';
import {MediaItemService} from './media-item.service';
import {LOOKUP_LISTS,lookupList} from './providers';

@NgModule({
  declarations: [
    AppComponent,MediaItemComponent,MediaItemListComponent
    ,FavoriteDirective,CategoryList,MediaItemFormComponent,ValuesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
  ],

  providers: [MediaItemService,{provide: LOOKUP_LISTS, useValue:lookupList }],
  bootstrap: [AppComponent]
})
export class AppModule { }
