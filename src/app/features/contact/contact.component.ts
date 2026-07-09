import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';
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
    emailjs.send(
      environment.emailJs.serviceId,
      environment.emailJs.templateId,
    {
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      subject: this.contactForm.value.subject,
      message: this.contactForm.value.message
    },
    environment.emailJs.publicKey
  ).then(() =>{
       alert('Message sent successfully!');
       this.contactForm.reset();
    }).catch((error)=>{
      console.error(error);
      alert('Failed to send message');
    })
  }
}
