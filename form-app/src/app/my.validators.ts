import { FormControl } from "@angular/forms";
import { Observable } from 'rxjs'
export class MyValidators {

    static restrictedEmails(control: FormControl): {[key: string]: boolean} {      
        if(['v@mail', 't@mail'].includes(control.value)){
            return {'restrictedEmail': true}   
        }
        return null as any 
    }
    static uniqEmail(control: FormControl): Promise<any> | Observable<any> {
          return new Promise(resolve => {
              setTimeout(() => {
                   if(control.value === 'v@mail'){
                    resolve({uniqEmail: true})
                   }else{
                    resolve(null)
                   }
              }, 1000)
          })
    }
}