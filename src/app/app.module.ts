import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//import { NotesComponent } from './notes/notes.component';
import { AppComponent } from './app.component';
import { NotepadComponent } from './notepad/notepad.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { CreateNoteComponent } from './create-note/create-note.component';
import { Routes,RouterModule } from '@angular/router';
import { NotesComponent } from './notes/notes.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const appRoutes: Routes = [
  // {path: 'notes', component: NotesComponent},
  {path: 'create' , component: CreateNoteComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    NotepadComponent,
    CreateNoteComponent,
    NotesComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatSidenavModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  // entryComponents: [NotesComponent]
})
export class AppModule { }
