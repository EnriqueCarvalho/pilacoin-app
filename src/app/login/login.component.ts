import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Usuario } from '../shared/model/usuario';
import { UsuarioService } from '../shared/service/usuario.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  usuario: Usuario = new Usuario()
  

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({

      login: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      senha: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
  
    })
  }

  fazerLogin(){
    if (this.form.valid){   
      

     // this.usuario.login= this.formulario.get('login')?.value
      //this.usuario.senha= this.formulario.get('senha')?.value

      //this.usuarioService.login(this.usuario).subscribe(u=>{
        //if (u != null){
        if(this.form.get('login')?.value == 'admin' && this.form.get('senha')?.value == 'admin'){
          //this.usuarioService.setUsuarioLogado(u) 
          this.router.navigate(['/index'])    
        }else{
          alert("Usuário e/ou senha incorretos")  
        }
      // })
    }
  }
}

   
  

 