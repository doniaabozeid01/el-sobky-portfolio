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
  formSent = false;
  successMessage = '';
  errorMessage = '';

  private readonly toEmail = 'sobakimahmoud@gmail.com';
  private readonly serviceId = 'service_6tw6kl6';
  private readonly templateId = 'template_yje69ju';
  private readonly publicKey = 's96Hns05YE3JbYABT';

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

    try {
      await this.sendViaEmailJs(formValue);
      this.successMessage = 'Your message has been sent successfully!';
      this.formSent = true;
      this.contactForm.reset();
    } catch (emailJsError) {
      console.warn('EmailJS failed, trying FormSubmit fallback', emailJsError);
      try {
        await this.sendViaFormSubmit(formValue);
        this.successMessage = 'Your message has been sent successfully!';
        this.formSent = true;
        this.contactForm.reset();
      } catch (fallbackError) {
        console.error(fallbackError);
        this.errorMessage =
          'Could not send right now. Email me at sobakimahmoud@gmail.com';
      }
    } finally {
      this.isSending = false;
    }
  }

  private sendViaEmailJs(formValue: Record<string, string>) {
    return emailjs.send(this.serviceId, this.templateId, {
      to_email: this.toEmail,
      to_name: 'Mahmoud',
      from_name: formValue['name'],
      from_email: formValue['email'],
      reply_to: formValue['email'],
      phone: formValue['phone'],
      country: formValue['country'],
      message: formValue['message'],
      subject: `Portfolio contact from ${formValue['name']}`
    });
  }

  private async sendViaFormSubmit(formValue: Record<string, string>) {
    const res = await fetch(`https://formsubmit.co/ajax/${this.toEmail}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        name: formValue['name'],
        email: formValue['email'],
        phone: formValue['phone'],
        country: formValue['country'],
        message: formValue['message'],
        _subject: `Portfolio contact from ${formValue['name']}`,
        _template: 'table',
        _captcha: 'false'
      })
    });

    if (!res.ok) {
      throw new Error(`FormSubmit failed: ${res.status}`);
    }

    return res.json();
  }
}
