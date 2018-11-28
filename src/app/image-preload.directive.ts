
import { Directive,Input,HostBinding } from '@angular/core';

@Directive({
  selector: 'img[default]',
  host: {
    '(error)':'UpdateUrl()',
    '(load)':'load()',
    '[src]':'src'
  }
})
export class ImagePreloadDirective {
  @Input() src:string;
  @Input() default:string;
  @HostBinding('class') className

 
  constructor() { }
  UpdateUrl() {
    setTimeout(() => {
      this.src = this.default;
      this.className = 'img-not-loaded';
    }, 2000);
   
  }
  load(){
    this.className = 'image-loaded';
    
  }
}
