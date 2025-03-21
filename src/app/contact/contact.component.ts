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
  mainNumber: string = "+91 70215 35750";
  mail: string = 'surajprajapati5750@gmail.com';

  socialLinks = [
    { name: 'Instagram', url: 'https://www.instagram.com/soorajprajapati_/?igsh=MWtpZGQwdnlpcTVqeg%3D%3D&utm_source=qr#', icon: 'fab fa-instagram' },
    { name: 'Facebook', url: 'https://www.facebook.com', icon: 'fab fa-facebook' },
    { name: 'Twitter', url: 'https://www.twitter.com', icon: 'fab fa-twitter' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/suraj-prajapati-0b027b271/', icon: 'fab fa-linkedin' }
  ];
}
