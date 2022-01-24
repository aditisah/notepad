import { Component, OnInit, Output,EventEmitter } from '@angular/core';
//import { format } from 'path';


@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {
@Output() addNewEvent =new EventEmitter<string>();

 newNote: string = '';
addNewNote(newNote: string){
this.addNewEvent.emit(newNote);
//newNote = '';
//console.log(newNote);
}
  constructor() { }

  ngOnInit(): void {
  }

}
