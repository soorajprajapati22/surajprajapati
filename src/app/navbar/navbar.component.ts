import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  menuOpen: boolean = false;

  // Resume download link
  private resumeUrl: string = "https://drive.google.com/file/d/1__VXv2oZa9kDjiPn9Ffh0UE-t1xVmKWG/view?usp=drive_link";

  // Toggle menu
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  // Close menu when a link is clicked
  closeMenu(): void {
    if (window.innerWidth <= 992) {  
      this.menuOpen = false;
    }
  }

  // Close menu when clicking outside (for better UX)
  @HostListener('document:click', ['$event'])
  handleOutsideClick(event: Event): void {
    if (this.menuOpen && !(event.target as HTMLElement).closest('.navbar')) {
      this.menuOpen = false;
    }
  }

  // Function to download the resume
  downloadResume(): void {
    const link = document.createElement('a');
    link.href = this.resumeUrl;
    link.download = "Suraj_Prajapati_Resume.pdf";
    link.click();
  }
}