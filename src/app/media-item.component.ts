import {Component,Input,Output,EventEmitter} from '@angular/core';
import {} from './category-list.pipe';

@Component({
    selector :'media-item',
    templateUrl :'./media-item.component.html',
    styleUrls : ['./media-item.component.css']
})
export class MediaItemComponent{
    @Input() mediaItem;
    @Output('deleted') delete = new EventEmitter();

    onDelete(){
       this.delete.emit(this.mediaItem);
    }
}