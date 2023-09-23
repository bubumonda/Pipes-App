import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly'
})

export class CanFlyPipe implements PipeTransform {
  transform(canFly: boolean): 'Vuela'|'No Vuela' {
    return(canFly)? 'Vuela':'No Vuela';
  }
}
