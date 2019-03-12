import {Component} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  login = 'Login';
  hiuser = 'Hello people!';

  menuLink = [
    {
      link: 'Home',
      downMenu: ['about us', 'contacts' ]
    },
    {
      link: 'Articles',
      downMenu: [ 'description', 'contacts' ]
    },
    {
      link: 'Subscription',
      downMenu: [ 'service', 'about', 'contacts' ]
    },
    {
      link: 'About Us',
      downMenu: [ 'service', 'about', 'contacts' ]
    },
    {
      link: 'Contact Us',
      downMenu: [ 'service', 'about', 'contacts' ]
    }
  ];

}
