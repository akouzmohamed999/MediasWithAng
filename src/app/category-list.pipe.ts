import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name : 'categoryList'
})

export class CategoryList implements PipeTransform{
    
    transform(mediaItems){
        var categories =  [];
        mediaItems.forEach(media => {
            if(categories.indexOf(media.category) <= -1){
                categories.push(media.category);
            }
        });
        return categories.join(', ');
    }
}