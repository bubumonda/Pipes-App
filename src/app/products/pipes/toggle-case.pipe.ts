import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase'
})

export class ToggleCasePipe implements PipeTransform {


  transform(value: string, toUppper:boolean=false): string {
    return (toUppper)?
           value.toUpperCase():
           value.toLocaleLowerCase();

  }
}
