import { Injectable } from '@angular/core';
// import 'rxjs/add/operator/map';
// import {Http} from '@angular/http'
import { Observable } from 'rxjs-compat/Observable';
import { Note } from '../note';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NoteService {

  note: Note = new Note();

  constructor(private http: HttpClient) { }
  private url = 'http://localhost:3000/notes';

  getAll(): Observable<Array<Note>> {
    return this.http.get<Array<Note>>(this.url);
  }
  post(value: Note): Observable<Note> {
    return this.http.post<Note>(this.url, value);
  }
  delete(note: Note) {
    return this.http.delete(this.url + '/' + note.id);
  }
  update(id: number, note: Note): Observable<Note> {
    return this.http.put<Note>(`${this.url}/${id}`, note);
  }
  getId(item) {
    return this.http.get(`${this.url}/${item.id}`);
  }
  updateFav(item: Note, fav) {
    item.important = fav;
    return this.http.patch(`${this.url}/${item.id}`, item);
  }
}
