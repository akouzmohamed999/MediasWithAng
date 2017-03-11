import {Component,Input,Output,EventEmitter} from '@angular/core';
import {Http} from '@angular/http';

@Component({
    selector :'media-item',
    templateUrl :'./media-item.component.html',
    styleUrls : ['./media-item.component.css']
})
export class MediaItemComponent{

    constructor(private http : Http){}
    @Input() mediaItem;
    @Output('deleted') delete = new EventEmitter();
    @Output('favoriteChanged') favoritechanged = new EventEmitter();

    onDelete(){
       this.delete.emit(this.mediaItem);
    }
    onFavoriteChange(){
       this.favoritechanged.emit(this.mediaItem);
  }
}