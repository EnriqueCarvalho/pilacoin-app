import { Component, ViewChild } from '@angular/core';
import { MineiracaoService } from '../shared/service/mineiracao.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  @ViewChild('staticTabs', { static: false }) staticTabs?: any;
  selectTab(tabId: number) {
    if (this.staticTabs?.tabs[tabId]) {
      this.staticTabs.tabs[tabId].active = true;
    }
  }

  constructor(
    private mineiracaoService: MineiracaoService
  ){

  }


  iniciarMineiracao(){
    this.mineiracaoService.iniciarMineiracao().subscribe(e=>{
      if (e != null){
        alert("Mineiracao iniciada com sucesso")
       
      }else{
        alert("Erro ao iniciar Mineiracao")  
      }
    }) 
  }

  pararMineiracao(){
    this.mineiracaoService.pararMineiracao().subscribe(e=>{
      if (e != null){
        alert("Mineiração parada com sucesso")
       
      }else{
        alert("Erro ao parar mineiração")  
      }
    }) 
  }

}
