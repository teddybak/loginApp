import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit() {
  }

  logout(){

    this.auth.logout();
    this.router.navigate(['home']);
  }
}
