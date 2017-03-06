
import {Component,Inject} from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {MediaItemService} from './media-item.service';
import {LOOKUP_LISTS } from './providers';
@Component({
selector :'media-item-form',
templateUrl : './media-item-form.component.html',
styleUrls : ['./media-item-form.component.css']
})
export class MediaItemFormComponent{

    form : FormGroup;

    constructor(fb : FormBuilder,@Inject(LOOKUP_LISTS) public lookupLists){
        this.form = fb.group({
            'medium' : ['movies'],
            'name'  : ['',Validators.compose([
                Validators.required,
               //Validators.pattern('[\\w\\-\\s\\/]')
            ])],
            'category' : [],
            'year' : ['',this.yearValidator]
        })
    }

    yearValidator(control){
            if (control.value.trim().lenght === 0 ) return null;  
            var year = parseInt(control.value);
            var min = 1900;
            var max = 2100;
            if (year >= min && year <= max) return null;
            return {'year' : {'min': min,'max': max}};
    }

    onSubmit(mediaItem){
      //  this.mediaItemSerice.addMediaItem(mediaItem);
    }
}