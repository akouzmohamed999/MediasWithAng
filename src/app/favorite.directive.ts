import {Directive,HostBinding,HostListener,Input} from '@angular/core';

@Directive({
    selector : '[mwFavorite]'
})

export class FavoriteDirective{


@HostBinding('class.is-favorite') isFavorite = true;
@Input()
    set mwFavorite(value){
        this.isFavorite=value;
    }
@HostBinding('class.is-favorite-hovering') isHovering;
@HostListener('mouseenter')
    hovering(){
        this.isHovering = true;
    }
@HostListener('mouseleave')
    favoriteHovering(){
        this.isHovering = false;
    }
}