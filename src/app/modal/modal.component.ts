import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { SubmodalComponent } from '../submodal/submodal.component';
import { LandingService } from './shared/landing.service';
import { Message } from './shared/message';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  message: Message = new Message();
  id: any;
  messages: any;
  selectedFiles: FileList;
  currentMessage: Message;
  file: any;

  constructor( private lS: LandingService,
  private router: Router,
  private aR: ActivatedRoute,
  @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog, public dialogRef: MatDialogRef<MatDialog>, public subdialog: MatDialog) { }

  ngOnInit() {

  }

  onSave (form: NgForm) {
    this.lS.create(form.value);
    this.router.navigate(['/']);
  }

  openSubDialog() {
    this.subdialog.open(SubmodalComponent, {
      width: '700px',
      height: '300px',
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
