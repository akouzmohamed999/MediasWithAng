import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import { MediaItem } from './media-item.interface';
import { Observable } from 'rxjs';

@Injectable()
export class MediaItemService {
    constructor(private http: Http) { }

    get(medium): Observable<any> {
        if(medium == ''){
            return this.http.get('http://localhost:8080/item/mediaitems')
            .map(response => response.json());
        }else{
            return this.http.get(`http://localhost:8080/item/mediaitembymedium?medium=${medium}`)
            .map(response => response.json());
        }
        
    }


    addMediaItem(mediaItem) {
        var headers =  new Headers({'Content-Type':'application/json'});
        return this.http.post('http://localhost:8080/item/add',
        JSON.stringify(mediaItem),{headers:headers})
        .map(response => {});
    }
    
     deleteMediaItem(mediaItem) {
            return this.http.delete(`http://localhost:8080/item/delete?id=${mediaItem.id}`)
            .map(response =>{});
    }

    changeFavorite(mediaItem){
             return this.http.delete(`http://localhost:8080/item/changefavorite?id=${mediaItem.id}`)
            .map(response =>{});    
    }


    }