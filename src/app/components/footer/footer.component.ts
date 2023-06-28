import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  footer_list = [
    {
      title: 'Shop',
      sub: ['Gift cards', 'Site map', 'Polka blog', 'Login', 'Sign in'],
    },
    {
      title: 'Sell',
      sub: ['Sell on Polka', 'Teams', 'Forums', 'Affiliates'],
    },
    {
      title: 'About',
      sub: ['Polka, Inc.', 'Policies', 'Investors', 'Careers', 'Press'],
    },
    {
      title: 'Help',
      sub: ['Help Center', 'Trust and safety', 'Privacy settings'],
    }
  ];
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
