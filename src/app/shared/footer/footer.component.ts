import {Component, OnInit} from '@angular/core';
import { faInstagram, faLinkedin, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  faInstagram = faInstagram
  faLinkedin = faLinkedin
  faFacebook = faFacebook
  faTwitter = faTwitter


  constructor() {

  }


  ngOnInit(): void {
  }

}
