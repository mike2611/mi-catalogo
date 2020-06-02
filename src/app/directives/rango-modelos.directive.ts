import { Directive, Input } from '@angular/core';
import { NG_ASYNC_VALIDATORS, NG_VALIDATORS, Validator, AbstractControl, ValidatorFn } from '@angular/forms';
import { Key } from 'protractor';

@Directive({
  selector: '[appRangoModelos]',
  providers: [{provide: NG_VALIDATORS, useExisting: RangoModelosDirective, multi: true}]
})
export class RangoModelosDirective implements Validator{

 @Input('appRangoModelos') modelo: object;
 validate(control: AbstractControl): {[key: string]: any}{
  console.log("valor de modelo 0 ",this.modelo);
     return this.modelo ? this.rangoValidator()(control):null;
   
 }

 

 rangoValidator(): ValidatorFn{
   return(control: AbstractControl): {[key: string]: any} | null =>{
    const valorMenor = this.modelo[3];
    const valorMayor = this.modelo[3];
    return (valorMenor > valorMayor) ? {'forbiddenRango': {value: (valorMenor > valorMayor)}} : null;
   }
 }

}
