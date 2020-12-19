import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../team-list/team-list.component';

@Component({
  selector: 'app-team-component',
  templateUrl: './team-component.component.html',
  styleUrls: ['./team-component.component.css']
})
export class TeamComponent implements OnInit {
  // IMP - Implement addChannel and removeChannel operations within this component
  @Input() team: Team;
  @Input() teamIndex: number;
  currentIndex: number;
  currentState: number;
  constructor() { 
    
  }

  ngOnInit() {
    
  }

  formValidation() {
    
  }

  removeChannel(event, index) {
    
  }

  addChannel(event) {
    
  }

  sort() {
    
  }

}
