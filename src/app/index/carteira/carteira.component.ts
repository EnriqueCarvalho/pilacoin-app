import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { pilaCoin } from 'src/app/shared/model/pilaCoin';
import { PilacoinService } from 'src/app/shared/service/pilacoin.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/shared/model/usuario';
import { UsuarioService } from 'src/app/shared/service/usuario.service';
import { Transferencia } from 'src/app/shared/model/transferencia';
import { TransferenciaService } from 'src/app/shared/service/transferencia.service';


@Component({
  selector: 'app-carteira',
  templateUrl: './carteira.component.html',
  styleUrls: ['./carteira.component.css']
})
export class CarteiraComponent implements OnInit{

  pilas: pilaCoin[] = []
  usuarios: Usuario[] = []
  formularioModal: FormGroup = new FormGroup({});
  nonce?: string;
  private minhaChave = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwtFJo4fLgFgAnjTnLVWsA96IAGG8eHWw2M1IStvhfv83FwaLJq4ddbGYdtuF8nCgIq0f0KDCsM98WNqdbSF2ehAslXdaSsZrTvQyNkTrH1wJvgUBOtg1w+zhMx9sAUhEVbyeNVlxP92oIuIUEKtFXGj+iyasaaxAb9r1gINH/JnStUrhC2v8kUgtvp2BrOuoeGgRF2LaiKre9o+87Zz0VfSrVKLL+55e9GkB/OdH0GMx8uABUM2cF8aH3Fv/FJrJu+5W/COftrGq3Kk+A5D/eMGiTMyGGe39jIh5p7So0DwRLVdNqEDBVWDXFW0zK+Pjagg2Y2efCu2k1Ut6qUG47QIDAQAB"

  modalRef?: BsModalRef;
  @ViewChild('templateConfirm') templateConfirm:any

  constructor(
    private pilaCoinService: PilacoinService,
    private modalService: BsModalService,
    private usuarioService: UsuarioService,
    private formBuilder: FormBuilder,
    private transferenciaService: TransferenciaService
  ){}

  ngOnInit(): void {
   this.getMeusPilas()

    this.formularioModal = this.formBuilder.group({
      chaveUsuarioDestino: [null, [Validators.required,Validators.minLength(5) ]],    
      nonce: [null, [Validators.required]],  
    }) 
  }

  getMeusPilas(){
    this.pilaCoinService.getMeusPilas().subscribe( p => this.pilas = p )
  }

  transferirPila(){
    let transferencia: Transferencia = new Transferencia()

    transferencia.noncePila = this.nonce;
    transferencia.chaveUsuarioDestino = this.formularioModal.get('chaveUsuarioDestino')?.value
    transferencia.chaveUsuarioOrigem = this.minhaChave
    this.transferenciaService.transferirPila(transferencia).subscribe( m => console.log(m))

  }

  openModal(template: TemplateRef<any>, pila:pilaCoin){
    this.nonce = pila.nonce
    this.usuarioService.getUsuarios().subscribe( u => this.usuarios = u)
    this.modalRef = this.modalService.show(template, {
      ariaDescribedby: 'my-modal-description',
      ariaLabelledBy: 'my-modal-title'
    });  
  }
}
