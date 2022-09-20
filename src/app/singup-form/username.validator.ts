import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidator {


 static connotContainSpace(control:AbstractControl):ValidationErrors | null {
    // la  valeur  li kan appliqué 3liha ana  had  la regle
    if((control.value as string).indexOf(' ')>=0){
          return {
            connotContainSpace : true
          }
    }
    return null

}

}
