// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'form-app';
// }


import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
// import { LocalService } from './services/local.service'
import { MyValidators } from './my.validators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
  providers: [
    // LocalService
  ]
})


export class AppComponent  implements OnInit {
   


  form!: FormGroup;

  ngOnInit(){
     this.form = new FormGroup({
          emailo: new FormControl('', [Validators.required, 
            Validators.email, 
            MyValidators?.restrictedEmails],
          ),
          password: new FormControl('', [Validators.required, Validators.minLength(3)]),
          
            address: new FormGroup({
              country: new FormControl('ua'),
              city: new FormControl('', Validators.required )
            }),

            skills: new FormArray([])   
     })
  }

  submit(){
    // console.log(this.form)
    // const formData = {...this.form.value}
    // console.log(formData)
      if(this.form.valid){
        console.log(this.form)
        const formData = {...this.form.value}
        console.log(formData)
      }
      this.form.reset()
  }

  setCapital(){
      const cityMap = {
          ua: 'Kyiv',
          de: 'Berlin',
          by: 'Minsk'
      }
    let cityKey = this.form.get('address')?.get('country')?.value 
  
    let city =  ''
    // let city =   cityMap[cityKey]
      switch(cityKey){
            case 'ua':
              console.log(cityMap['ua']);
              city =  cityMap['ua']
              break;
            case 'de':
              console.log(cityMap['de']);
              city =  cityMap['de']
              break;
            case 'by':
              console.log(cityMap['by']);
              city =  cityMap['by']
              break;
      }

      this.form.patchValue({
           address: { city }
      })
  }

  addSkill(){
      const control = new FormControl('', Validators.required);
      (<FormArray>this.form.get('skills')).push(control)
      // (this.form.get('skills') as FormArray).push(control)





  }
}


// [MyValidators.uniqEmail]