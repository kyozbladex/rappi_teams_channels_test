import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamList implements OnInit {

  teams: Team[] = [];
  component: Team;
  
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

  formValidation() {
    
  }

  addTeam(event) {
    
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
