import { Component, OnInit, InjectionToken, Inject } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../services/note.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


export const DIALOG_DATA = new InjectionToken('DIALOG_DATA');

@Component({

  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.css']
})
export class UpdateDialogComponent implements OnInit {

  array: Array<Note> = [];
  note: Note;
  id;

  constructor(private service: NoteService,
    @Inject(MAT_DIALOG_DATA) data: any) {
    this.id = data.id;
    console.log("Data: ", data);
    this.note = new Note();
  }

  ngOnInit(): void {
    this.service.getAll().subscribe(response => {
      this.array = response;
      console.log(this.array);
    });

  }

  get() {
    this.note.title = this.array[this.id].title;
    this.note.body = this.array[this.id].body;
  }
  
  update() {
    if (this.note.title == '' || this.note.body == '') {
      alert('You cannot leave title and/or details blank');
    }
    else {
      this.service.update(this.array[this.id].id, this.note)
        .subscribe(response => {
          console.log(response);
        });
      }
    window.location.reload();
  }
}
