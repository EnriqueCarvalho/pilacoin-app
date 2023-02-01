import { WebSocketService } from '../service/web-socket.service';
import { myRxStompConfig } from './myRxStomp.config';

export function rxStompServiceFactory() {
  const rxStomp = new WebSocketService();
  rxStomp.configure(myRxStompConfig);
  rxStomp.activate();
  return rxStomp;
}
