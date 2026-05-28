import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  constructor(private fb: FormBuilder){}

  contactForm = this.fb.group({
    name: ['' , [Validators.required, Validators.minLength(3)]],
    email: ['' , [Validators.required, Validators.email]],
    subject: ['' , [Validators.required]],
    message: ['' , [Validators.required, Validators.minLength(10)]],
  });

  onSubmit(){
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    //leeh ??
    console.log(this.contactForm.value);
  }
}
