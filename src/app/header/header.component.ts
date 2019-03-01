import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menuHome = 'Home';
  menuArtikle = 'Articles';
  menuSubscription = 'Subscription';
  menuAbout = 'About Us';
  menuContact = 'Contact Us';


  login = 'Hi people!';
}
