import { Component, OnInit, Inject } from '@angular/core';
import {  MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  ngOnInit() {}
  openDialog() {
    this.dialog.open(ModalComponent, {
      width: '700px',
      height: '770px',
    });
  }

}
