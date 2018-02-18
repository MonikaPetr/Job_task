import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { NavComponent } from './nav/nav.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ProductsComponent } from './products/products.component';
import { SuccessComponent } from './success/success.component';
import { ModalComponent } from './modal/modal.component';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatDialogModule, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA} from '@angular/material';
import {ErrorStateMatcher, ShowOnDirtyErrorStateMatcher} from '@angular/material/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SubmodalComponent } from './submodal/submodal.component';
import { AngularFireModule } from 'angularfire2';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { LandingService } from './modal/shared/landing.service';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {MatMenuModule} from '@angular/material/menu';

export const firebaseConfig = {
  apiKey: "AIzaSyCyAuDTtsADQ67puXkSo4hVARmmlG9U440",
    authDomain: "jobtask-80e4b.firebaseapp.com",
    databaseURL: "https://jobtask-80e4b.firebaseio.com",
    projectId: "jobtask-80e4b",
    storageBucket: "gs://jobtask-80e4b.appspot.com",
    messagingSenderId: "538145139981",
};

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavComponent,
    ProductsComponent,
    SuccessComponent,
    ModalComponent,
    SubmodalComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    MatMenuModule
  ],
  providers: [
    { provide: MatDialogRef, useValue: {} },
	  { provide: MAT_DIALOG_DATA, useValue: [] },
    LandingService, AngularFireDatabase,
  ],
  exports: [ModalComponent, SubmodalComponent],
  entryComponents: [ ModalComponent, SubmodalComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
