import {AbstractControl, ValidationErrors} from '@angular/forms'

export class UsernameValidator{
    static cannotContainsSpace(control:AbstractControl):ValidationErrors | null{
        if((control.value as string).indexOf(' ') >= 0){
            return {cannotContainsSpace : true}
        }

        return null;
    }

    static nameIsUnique(control:AbstractControl):Promise<ValidationErrors| null>{
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                if(control.value == 'kamal' || control.value == ""){
                    resolve({nameIsUnique: true})
                }else{
                    resolve(null);
                }
            },2000)
        });
    }
}