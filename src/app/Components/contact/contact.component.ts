import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  isSending = false;
  successMessage = '';
  errorMessage = '';

  // EmailJS Config
  // private serviceId = 'service_4bq8p9a';
  private serviceId = 'service_6tw6kl6';
  private templateId = 'template_yje69ju';
  private publicKey = 's96Hns05YE3JbYABT';

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      country: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    emailjs.init(this.publicKey);
  }

  async onSubmit() {
    this.successMessage = '';
    this.errorMessage = '';

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSending = true;

    const formValue = this.contactForm.value;

    const templateParams = {
      from_name: formValue.name,
      from_email: formValue.email,
      phone: formValue.phone,
      country: formValue.country,
      message: formValue.message,
      subject: 'New contact request from portfolio website'
    };

    try {
      await emailjs.send(this.serviceId, this.templateId, templateParams);
      this.successMessage = 'your message has been sent successfully!';
      this.contactForm.reset();
    } catch (err) {
      console.error(err);
      this.errorMessage = 'An error occurred while sending your message. Please try again later.';
    } finally {
      this.isSending = false;
    }
  }
}
