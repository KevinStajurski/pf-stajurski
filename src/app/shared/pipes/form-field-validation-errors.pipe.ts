import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'formFieldValidationErrors'
})
export class FormFieldValidationErrorsPipe implements PipeTransform {

  transform(value: ValidationErrors | undefined | null, ...args: unknown[]): unknown {
    if (value) {
      let messages: string[] = []
      for (const key in value) {
        const errorDetail = value[key]
        if (Object.prototype.hasOwnProperty.call(value, key)) {
          if (key === 'required') messages.push('Este campo es requerido.')
          if (key === 'pattern') messages.push('No cumple con el formato requerido.')
          if (key === 'minlength') messages.push(`Debe tener al menos ${errorDetail.requiredLength} caracteres`)
          console.log(errorDetail)
        }
      }
      return messages.join('. ')
    }
    return null
  }
}