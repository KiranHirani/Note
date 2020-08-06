import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../services/note.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateDialogComponent } from '../update-dialog/update-dialog.component';

@Component({
  selector: 'app-view-notes',
  templateUrl: './view-notes.component.html',
  styleUrls: ['./view-notes.component.css']
})
export class ViewNotesComponent implements OnInit {

  bookmark: boolean = true;
  bookedArray:Array<Note>=[];
  constructor(public service: NoteService,
    public matService: MatDialog
  ) {
    this.array = [];
  }

  array: Array<Note>;

  ngOnInit(): void {
    this.get();
  }
  get() {
    this.service.getAll().subscribe(
      response => {
        this.array = response;
      }
    )
  }
  delete(note) {
    this.service.delete(note)
      .subscribe(response => console.log("Note deleted"));
    this.get();
  }
  getNote(note) {
    let index = this.array.indexOf(note);
    this.matService.open(UpdateDialogComponent, {
      data:
      {
        id: index
      }
    })
  }

  Bookmark($event, a) {
    let index = this.array.indexOf(a);
    this.array[index].important = $event.newValue;
    this.bookmark = $event.newValue;
    this.service.updateFav(a, $event.newValue)
      .subscribe(response => console.log(response));
    console.log($event);
  }

}
