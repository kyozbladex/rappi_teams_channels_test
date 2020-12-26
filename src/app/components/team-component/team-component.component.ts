import { Component, OnInit, Input, ViewChild } from '@angular/core';
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

  currentOrder: number = 0;
  inputChannel: string = "";
  disabled = false;

  constructor() { 
    
 
  }

  ngOnInit() {

  }

  onChange() {
    if (this.inputChannel.length > 0 && this.disabled == true) {
      this.disabled = false;
    }
  }

  formValidation() {
    let patron = /[A-Za-z]+[^0-9]/ig;
    //let patron = /^[A-Za-z]+$/;

    if(this.inputChannel.match(patron)) {
      this.addChannel();
      this.inputChannel = '';
    } else {
     this.inputChannel = '';
      this.disabled = true;
    }

  }

  removeChannel(event, index) {
    this.team.channels.splice(index,1);
  }

  addChannel() {

    if (this.team.channels.length > 0) {
      this.team.channels.push({name: this.inputChannel, index: this.team.channels.length+1});
      //this.team.channels.push({name: this.inputChannel, index: this.team.channels[this.team.channels.length-1].index+1});
    } else {
      this.team.channels.push({name: this.inputChannel, index: 1});
    } 
  } 

  sort() {

     let teamArray = this.team.channels;
    
    if (this.currentOrder == 0) {
      teamArray.sort((a,b) => a.name.localeCompare(b.name));
      this.currentOrder = 1;
    } else if (this.currentOrder == 1) {
      teamArray.sort((a,b) => b.name.localeCompare(a.name));
      this.currentOrder = 2;
    }  else if (this.currentOrder == 2) {
      teamArray.sort((a,b) => a.index - b.index);
      this.currentOrder = 0;
    }  

  }

}
