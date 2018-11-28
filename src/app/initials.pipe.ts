import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials'
})
export class InitialsPipe implements PipeTransform {
 // created 'initials' directive to get first letter from news provider/ if provider name s null then ? will be displayed 
  transform(value: string) {
    console.log(value);
    if (value != null){
    return value.replace(/[a-z]/g, '').replace(' ', '').substring(0,1);
    }
    else{
      return '?'
    }
  }

}
