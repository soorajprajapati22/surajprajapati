import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  mainNumber: string = "+91 98765 43210";
  mail: string = 'surajprajapati@gmail.com';

  socialLinks = [
    { name: 'Instagram', url: 'https://www.instagram.com', icon: 'fab fa-instagram' },
    { name: 'Facebook', url: 'https://www.facebook.com', icon: 'fab fa-facebook' },
    { name: 'Twitter', url: 'https://www.twitter.com', icon: 'fab fa-twitter' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com', icon: 'fab fa-linkedin' }
  ];
}
