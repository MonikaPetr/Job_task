import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-submodal',
  templateUrl: './submodal.component.html',
  styleUrls: ['./submodal.component.scss']
})
export class SubmodalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public subdialog: MatDialog, public subdialogRef: MatDialogRef<MatDialog>) { }

  ngOnInit() {
  }

  closeSubDialog() {
    this.subdialogRef.close();
  }

}
