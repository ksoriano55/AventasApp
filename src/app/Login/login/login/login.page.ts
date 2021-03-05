import { Component, OnInit } from '@angular/core';
import { Login } from '../../models/Login';
import { LoginService } from '../../Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  credential:Login={
    UserAccount:'',
    Password:'',
    Message:'',
  }
  Login:Login[] = []
  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

  async handleSubmit(){
    this.credential.Message = "";
    try{
      await this.loginService.InicioSesion(this.credential)
    }catch(error){
      this.credential.Message = error.error.Message;
    }
   
  }

}
