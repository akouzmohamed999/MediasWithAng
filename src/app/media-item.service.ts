import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import {HttpModule} from '@angular/http';
import {MediaItem} from './media-item.interface';
import {Observable} from 'rxjs';

@Injectable()
export class MediaItemService{

    private headers = new Headers();
    constructor(private http:Http){}

    get():Observable<any>{
         this.headers.append("Access-Control-Allow-Origin", '*');
        this.headers.append("Access-Control-Allow-Methods", 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
        return this.http.get('http://localhost:8080/item/mediaitems')
        .map(response => response.json());
    }
   /* getMediaItem(){
        return this.mediaItems;
    }
    
    addMediaItem(mediaItem){
        this.mediaItems.push(mediaItem);
    }

    deleteMediaItem(mediaItem){
        var index = this.mediaItems.indexOf(mediaItem);
        if(index >= 0){
            this.mediaItems.splice(index,1);
        }
    }*/
}