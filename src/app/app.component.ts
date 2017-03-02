import { Component } from '@angular/core';
import { MediaItemListComponent} from './media-item-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstMediaItem = {
        id: 1,
        name: "Firebug",
        medium: "Series",
        category: "Science Fiction",
        year: 2010,
        watchedOn: null,
        isFavorite: false
    };

    onTest(mediaItem){
        console.log("Ok i recieved that !! ");
    }
}
