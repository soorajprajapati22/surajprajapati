import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences = [
    {
      company: 'Myrah Consulting Services Pvt. Ltd.',
      position: 'Software Developer',
      duration: 'Dec 2024 - Present',
      responsibilities: [
        'Integrated Backend APIs with frontend applications, ensuring smooth data exchange and enhanced performance.',
        'Designed and developed user-friendly interfaces aligned with client requirements and industry standards.',
        'Collaborated with clients to deliver customized solutions and implemented requested changes effectively.'
      ]
    },
    {
      company: 'PHARVINEX CHEMPHARM PRIVATE LIMITED',
      position: 'Software Developer',
      duration: 'Sep 2024 - Dec 2024',
      responsibilities: [
        'Developed a comprehensive company website as a full-stack solution, ensuring seamless functionality.',
        'Maintained and updated the platform regularly based on evolving company requirements.',
        'Optimized user experience with functionality improvements and performance enhancements.'
      ]
    },
    // {
    //   company: 'ESARWA SOFTWARE',
    //   position: 'Web Developer',
    //   duration: 'Project',
    //   responsibilities: [
    //     'Developed web applications using Angular, Bootstrap, Material UI, and TypeScript.',
    //     'Designed responsive UI components, ensuring cross-device compatibility.',
    //     'Integrated APIs for dynamic data retrieval and real-time updates.'
    //   ]
    // },
    // {
    //   company: 'ESARWA MOBILE APP',
    //   position: 'Mobile Developer',
    //   duration: 'Project',
    //   responsibilities: [
    //     'Developed a cross-platform mobile app using Ionic Framework, Capacitor, and TypeScript.',
    //     'Designed intuitive UI components for both iOS and Android platforms.',
    //     'Integrated backend APIs for seamless data synchronization.'
    //   ]
    // }
  ];
}
