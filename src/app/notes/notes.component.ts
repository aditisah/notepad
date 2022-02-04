import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  @Input() notes1: string[]=[];
  @Output() addTextEvent = new EventEmitter<string>();
  date = new Date();
  selectedNote: string= '';
  //IsNoteSelected = false;
  constructor() {
    //console.log(this.notes1);
   }
  // notes: string[] = [];
  // addNote(newNote: string){
  //   this.notes.push(newNote);
  //   console.log(this.notes);
  //   }
  //document.get ('mat-list-item').onclick = changeColor;

  onSelectNote(selectedNote: string){
    //let index = this.notes1.findIndex(x=> x.text===text);
    //this.IsNoteSelected = true;
    this.addTextEvent.emit(selectedNote);
    // let col: any = document.getElementById('list');
    // col.style.backgroundColor = 'yellow';
  }
  ngOnInit(): void {
   //console.log(this.notes1);
  }

}
