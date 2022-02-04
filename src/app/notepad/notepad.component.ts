import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.css']
})
export class NotepadComponent implements OnInit {
  notes: string[] = [];
  selectedNoteData: string = '';
    addNote(newNote: string){
    this.notes.push(newNote);
    console.log(this.notes);

    //this.notes = [];
    //this.notes = [];
//newNote.slice(0,newNote.length);
    }
    showSelectedNote(selectedNote: string){
      this.selectedNoteData = selectedNote;
      console.log(this.selectedNoteData);
      }
  constructor() { }


  ngOnInit(): void {
  }

}
