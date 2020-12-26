import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamList implements OnInit {

  teams: Team[] = [];
  component: Team;

  teamName: string = "";

  disabled = false;
  
  constructor() { 
    this.teams.push({
      name: 'Team1',
      channels: [{
        name: 'channel1',
        index: 1
      },
      {
        name: 'channel2',
        index: 2
      }]
    });
    this.teams.push({
      name: 'Team2',
      channels: [{
        name: 'channel1',
        index: 1
      },
      {
        name: 'channel2',
        index: 2
      }]
    });
  }

  ngOnInit() {
    
  }

  onChange() {
    if (this.teamName.length > 0 && this.disabled == true) {
      this.disabled = false;
    }
  }

  formValidation() {
    let patron = /[A-Za-z]+[^0-9]/ig;
    
    if (this.teamName.match(patron)) {
      this.addTeam();
      this.teamName = "";
    } else {
      this.teamName = "";
      this.disabled = true;
    }
  }

  addTeam() {

     this.teams.push({name: this.teamName, channels:[]});

  }
}

export class Team {
  channels: Channel[];
  name: String
}

export class Channel {
  name: string;
  index: number;
}
