import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: any[], filterName: string): any {
    if(value.length === 0){
      return value
    } else {
      return value.filter((parse) => {
        return parse.username.toLowerCase().split(' ').join('').indexOf(filterName.toLowerCase()) >= 0
      })
    }
  }

}
