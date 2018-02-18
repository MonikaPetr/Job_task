import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import * as firebase from 'firebase';
import { Message } from './message';

@Injectable()
export class LandingService {
  messages: AngularFireList<any>;
  message: Message = new Message();

  constructor(private afd: AngularFireDatabase) {
  this.messages = afd.list("message")
}

private basePath: string = '/message';
private uploadTask: firebase.storage.UploadTask;


create(form: any) {
  this.messages.push(form);
}

}
