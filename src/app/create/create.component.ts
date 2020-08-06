import { Component, OnInit } from '@angular/core';
import { NoteService } from '../services/note.service';
import { Note } from '../note';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  note: Note = new Note();
  notes: Array<Note> = [];
  constructor(public service?: NoteService) { }

  ngOnInit(): void {
    this.getNotes();
  }

  getNotes() {
    this.service.getAll().subscribe(response => {
      this.notes = response;
      console.log(response);
    });
  }
  onSubmit() {
    if (this.note.title == '' || this.note.body == '') {
      alert('You cannot leave the title and note field blank')
    }
    else {
      this.service.post(this.note).subscribe(
        response => {
          this.notes.push(this.note);
        });

      this.note.title = '';
      this.note.body = '';

      alert("Note added to the list");
    }
  }
}