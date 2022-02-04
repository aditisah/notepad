import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';
//import { create } from 'domain';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
//@Input() notes2: string[] = [];
  constructor(private router: Router) { }
// reset(){
// this.notes2 = [];
// }
  ngOnInit(): void {

  }
  onCreateNote(){
this.router.navigate(['/create']);
  }
}
