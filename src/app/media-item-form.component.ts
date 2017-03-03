
import {Component} from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
@Component({
selector :'media-item-form',
templateUrl : './media-item-form.component.html',
styleUrls : ['./media-item-form.component.css']
})
export class MediaItemFormComponent{

    form ; FormGroup;

    constructor(fb : FormBuilder){
        this.form = fb.group({
            'medium' : ['movies',Validators.compose([
                Validators.required,
                Validators.pattern('[\\w\\-\\s\\/]+')
                       ])],
            'name'  : [],
            'category' : [],
            'year' : []
        })
    }
    onSubmit(mediaItem){
        console.log(mediaItem);
    }
}