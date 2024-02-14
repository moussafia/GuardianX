import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'taskFlowGardx';
  profile?:KeycloakProfile
  constructor(public keycloakService: KeycloakService){}
  async ngOnInit(): Promise<void> {
      if(await this.keycloakService.isLoggedIn()){
        this.keycloakService.loadUserProfile().then(profile=>{
          this.profile=profile;
        });
      }
  }
logout() {
  this.keycloakService.logout(window.location.origin).then(()=>{
    console.log("logout with success");
  }).catch((error)=> console.error("error logout", error));
}
async login() {
  this.keycloakService.login({
    redirectUri: window.location.origin
  });
}
}
