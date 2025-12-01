import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import emailjs from '@emailjs/browser';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  contactForm: FormGroup;
  isSending = false;
  successMessage = '';
  errorMessage = '';

  // حطّي هنا البيانات من EmailJS
  private serviceId = 'YOUR_SERVICE_ID';
  private templateId = 'YOUR_TEMPLATE_ID';
  private publicKey = 'YOUR_PUBLIC_KEY';

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      interest: ['', Validators.required],
      budget: ['', Validators.required],
      country: ['', Validators.required],
      message: ['', Validators.required],
    });

    // emailjs.init(this.publicKey);
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
      to_email: 'doniaabozeid16@gmail.com', // المستلم
      from_name: formValue.name,
      from_email: formValue.email,
      phone: formValue.phone,
      interest: formValue.interest,
      budget: formValue.budget,
      country: formValue.country,
      message: formValue.message,
    };

    try {
      // await emailjs.send(this.serviceId, this.templateId, templateParams);
      this.successMessage = 'تم إرسال رسالتك بنجاح ♥';
      this.contactForm.reset();
    } catch (err) {
      console.error(err);
      this.errorMessage = 'حصل خطأ أثناء الإرسال، حاولي تاني.';
    } finally {
      this.isSending = false;
    }
  }
}
