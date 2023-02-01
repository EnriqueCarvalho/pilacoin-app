import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Transferencia } from 'src/app/shared/model/transferencia';
import { Usuario } from 'src/app/shared/model/usuario';
import { UsuarioService } from 'src/app/shared/service/usuario.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios : Usuario[] = []
  form: FormGroup = new FormGroup({});

  modalRef?: BsModalRef;
  @ViewChild('templateConfirm') templateConfirm:any

  @ViewChild('staticTabs', { static: false }) staticTabs?: any;
 
  selectTab(tabId: number) {
    if (this.staticTabs?.tabs[tabId]) {
      this.staticTabs.tabs[tabId].active = true;
    }
  }


  ngOnInit(): void {
    this.getUsuarios()
    this.form = this.formBuilder.group({

      valor: [null, [Validators.required, Validators.maxLength(50)]],
      chavePublica: [null, [Validators.required]],
      nomeUsuario: [null, [Validators.required]]
   
  
    })
  }
  constructor (
    private usuarioService: UsuarioService,
    private formBuilder: FormBuilder
  ){  }

  private getUsuarios(){
    this.usuarioService.getUsuarios().subscribe( u=> this.usuarios = u )
  }

  btnTransferir(usuario: Usuario){
    const btn = document.getElementById('btn-transferencia-'+usuario.id);
    const form = document.getElementById('form-transferencia-'+usuario.id);
    if(btn != null && form != null){
      btn.style.display = 'none';
      form.style.display = 'block'
    }

   
  }

  transferirPila(){

    
    if(this.form.valid){

      let transferencia : Transferencia = {}
  
      transferencia.chaveUsuarioDestino =  this.form.get('chavePublica')?.value
      //transferencia. =  this.form.get('valor')?.value
      transferencia.chaveUsuarioDestino =  this.form.get('chavePublica')?.value
    
      // this.tra.excluirReserva(transferencia).subscribe(r=>{
      //   console.log(r)
      //   if (r != null){
     
      //     alert("Reserva excluido com sucessso")
          
      //   }else{
      //     alert("Erro ao excluir reserva: "+r)  
      //   }      
          
      //   })   
      }
      
      
  
  }
}
