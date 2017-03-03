import {Component} from '@angular/core';
import {MediaItemComponent} from './media-item.component';
import {MediaItemService} from './media-item.service';

@Component({
    selector : 'media-item-list',
    templateUrl : './media-item-list.component.html',
    styleUrls : ['./media-item-list.component.css'],
})
export class MediaItemListComponent{
mediaItems;
constructor(private mediaItemService : MediaItemService){
    this.mediaItems = mediaItemService.getMediaItem();
}
onMediaItemDelete(mediaItem){
    this.mediaItemService.deleteMediaItem(mediaItem);
}

}