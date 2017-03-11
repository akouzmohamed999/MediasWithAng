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
medium ='';
constructor(private mediaItemService : MediaItemService){}

ngOnInit(){
 this.getMediaItems(this.medium);
}
onMediaItemDelete(mediaItem){
    this.mediaItemService.deleteMediaItem(mediaItem).subscribe(()=>{this.getMediaItems(this.medium)});
}

onFavoriteChange(mediaItem){
    console.log('click receinved on list');
    this.mediaItemService.changeFavorite(mediaItem).subscribe(()=>{this.getMediaItems(this.medium)});
}

getMediaItems(medium){
    this.medium=medium;
return this.mediaItemService.get(medium).subscribe(mediaItems => {
            this.mediaItems =mediaItems},
             err => console.error(err), 
            ()=>console.log('Finished !!')
    );
}

}