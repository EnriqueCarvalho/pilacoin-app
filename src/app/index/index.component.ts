import { Component, OnInit, ViewChild } from '@angular/core';
import { MineiracaoService } from '../shared/service/mineiracao.service';
import { WebSocketService } from '../shared/service/web-socket.service';
import { Message } from '@stomp/stompjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit{

  @ViewChild('staticTabs', { static: false }) staticTabs?: any;
  selectTab(tabId: number) {
    if (this.staticTabs?.tabs[tabId]) {
      this.staticTabs.tabs[tabId].active = true;
    }
  }

  constructor(
    private mineiracaoService: MineiracaoService,
    private webSocketService: WebSocketService
  ){

  }
  ngOnInit(): void {
    // this.webSocketService.watch('/topic/dificuldade').subscribe((message: Message) => {
    //  console.log(message.body);
    //  console.log("veio")
    // });
  }

  onSendMessage() {
    const message = `Message generated at ${new Date()}`;
    this.webSocketService.publish({ destination: '/topic/dificuldade', body: message });
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
