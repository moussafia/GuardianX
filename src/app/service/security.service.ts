import { Injectable } from '@angular/core';
import { KeycloakEventType, KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  public profile?:KeycloakProfile;

  constructor(public kcService: KeycloakService) { 
    this.init();
  }

  init(){
    this.kcService.keycloakEvents$.subscribe({
      next: event => {
        if (event.type == KeycloakEventType.OnAuthSuccess) {
          console.log("auth done with success");
          this.kcService.loadUserProfile().then(p=>{
            this.profile = p
            console.log(this.profile);
          });  
        }
      },
      error: err=>console.log(err)
    });
  }
  
  public hasRoleIn(roles:string[]):boolean{

    let userRoles = this.kcService.getUserRoles();

    for(let role of roles){
        if(userRoles.includes(role)) return true;
    }
    return false;
  }
}
