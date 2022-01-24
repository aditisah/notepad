import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  @Input() notes1: string[]=[];
  constructor() {
    //console.log(this.notes1);
   }
  // notes: string[] = [];
  // addNote(newNote: string){
  //   this.notes.push(newNote);
  //   console.log(this.notes);
  //   }

  ngOnInit(): void {
   //console.log(this.notes1);
  }

}
