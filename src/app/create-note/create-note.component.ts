import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
//import { format } from 'path';


@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {
@Output() addNewEvent =new EventEmitter<string>();
@Input() selectedNotes = '';
 newNote: string = '';
 IsNoteNotSelected = true;

addNewNote(newNote: string){
//this.IsNoteSelected = false;
this.addNewEvent.emit(newNote);
//this.selectedNotes = newNote;
//this.IsNoteSelected = !this.IsNoteSelected;
//this.IsNoteNotSelected = false;
//console.log(this.IsNoteSelected);

// newNote = '';
// console.log(`new data is:${newNote}`);
}
showSelectedNote(){
 //this.IsNoteSelected = true;
  console.log("hi");

 this.newNote= this.selectedNotes;  //console.log(this.IsNoteSelected);
  this.IsNoteNotSelected = false;
   console.log(`new note value:${this.newNote}`);
}
  constructor() { }

  ngOnInit(): void {
  }

}
