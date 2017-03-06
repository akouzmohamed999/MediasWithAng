import {Component} from '@angular/core';
import {MediaItemComponent} from './media-item.component';
import {MediaItemService} from './media-item.service';
import {MediaItem} from './media-item.interface';

@Component({
    selector : 'media-item-list',
    templateUrl : './media-item-list.component.html',
    styleUrls : ['./media-item-list.component.css'],
})
export class MediaItemListComponent{
mediaItems : MediaItem;
constructor(private mediaItemService : MediaItemService){}

ngOnInit(){
 this.mediaItemService.get().subscribe(mediaItems => {
            this.mediaItems =mediaItems},
             err => console.error(err), 
            ()=>console.log('Finished !!')
    );
}

}