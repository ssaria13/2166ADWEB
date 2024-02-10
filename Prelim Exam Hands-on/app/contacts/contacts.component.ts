import { Component } from '@angular/core';

interface FormData {
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  order: string;
}

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {

  formData: FormData = {
    firstName: '',
    lastName: '',
    fullName: '',
    email: '',
    order: '',
  };
  submitForm() {
    // Update the full name when the form is submitted
    this.formData.fullName = `${this.formData.firstName} ${this.formData.lastName}`;
  }
}


