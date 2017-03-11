import {Directive,HostBinding,HostListener,Input,EventEmitter,Output} from '@angular/core';

@Directive({
    selector : '[mwFavorite]'
})

export class FavoriteDirective{
@Output('favoriteChange') favoritechange = new EventEmitter();
@HostBinding('class.is-favorite') isFavorite = false;
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

@HostListener('click')
    favoriteChange(){
        this.favoritechange.emit();
        console.log('favorite clicked')
    }

}