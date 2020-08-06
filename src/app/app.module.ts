import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteService } from './services/note.service';
import { CreateComponent } from './create/create.component';
import { HttpModule } from '@angular/http';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ViewNotesComponent } from './view-notes/view-notes.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { UpdateDialogComponent, DIALOG_DATA } from './update-dialog/update-dialog.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ViewNotesComponent,
    UpdateDialogComponent,
    BookmarkComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatDialogModule,
    MatIconModule,
    RouterModule.forRoot([
      {
        path: '',
        component: CreateComponent
      },
      {
        path: 'view',
        component: ViewNotesComponent
      }
    ])
  ],
  providers: [NoteService,
    CreateComponent,
    UpdateDialogComponent,
    {
      provide: DIALOG_DATA, useValue: {}
    },
  ],
  bootstrap: [AppComponent],
  entryComponents: [UpdateDialogComponent]
})
export class AppModule { }
