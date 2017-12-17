import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinFoto'
})
export class SinFotoPipe implements PipeTransform {

  transform( images: any[] ): any {
    let noimage:string = 'assets/img/noimage.png';
    if ( !images ){
      return noimage;
    }
    return ( images.length > 0 ) ? images[1].url : noimage;
  }

}
