import { Component, Input } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-component',
  templateUrl: './contact-component.component.html',
  styleUrls: ['./contact-component.component.css']
})
export class ContactComponentComponent {
    @Input() title = "Contacto";
  showAlert = false;

  contactForm = this.fb.group({
    nombre: ['', [Validators.required, Validators.min(1), Validators.max(30), this.forbiddenNameValidator()]],
    email: ['', [Validators.required, Validators.min(1), Validators.max(50), Validators.email]],
    asunto: ['', [Validators.required, Validators.min(4), Validators.max(30)]],
    mensaje: ['', [Validators.required, Validators.max(255)]],
  });

  constructor(private contactService: ContactService, private fb: FormBuilder) { }

  onSubmit() {
    this.contactService.postEmail(this.contactForm.value);
    this.showAlert = true;
  }

  forbiddenNameValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = /\d/.test(control.value);
      return forbidden ? { forbiddenName: { value: control.value } } : null;
    };
  }
}
