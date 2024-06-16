import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  public messageSubject = new Subject<any>();
  public message$ = this.messageSubject.asObservable();

}
