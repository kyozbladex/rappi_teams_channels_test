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
  //pattern = false;
  //@ViewChild('boton') boton;

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
//console.log("todo valido");
this.addChannel();
this.inputChannel = '';
   //   this.pattern = true;
    /* console.log(this.pattern);
     console.log("todo ok"); */
   //  this.addChannel(event);
    } else {
     // console.log("solo numeros o nada");
      
     this.inputChannel = '';
      this.disabled = true;
    }

  }

  removeChannel(event, index) {
    this.team.channels.splice(index,1);
  }

  addChannel() {

  //if (this.pattern) {
    if (this.team.channels.length > 0) {
      this.team.channels.push({name: this.inputChannel, index: this.team.channels.length+1});
      //this.team.channels.push({name: this.inputChannel, index: this.team.channels[this.team.channels.length-1].index+1});
    } else {
      this.team.channels.push({name: this.inputChannel, index: 1});
    } 
  } 
  /* else {
    this.inputChannel = '';
    this.disabled = true;
  } */
// let patron = /^[A-Za-z]+$/;

  // if(this.inputChannel.match(patron))
  //    {
     //console.log("bien, solo letras");
 /*     if (this.team.channels.length > 0) {
       this.team.channels.push({name: this.inputChannel, index: this.team.channels[this.team.channels.length-1].index+1});
     } else {
       this.team.channels.push({name: this.inputChannel, index: 1});
     } */
  //    }
      // else
      // {
      // console.log("mal, hay numeros");
      // this.inputChannel = '';
      // this.disabled = true;
      // }
  
    

    //console.log(this.team.channels);
    
  //}

  sort() {

     let teamArray = this.team.channels;
   // let originalArray = this.team.channels;

   // console.log("valor actual currentOrder: ", this.currentOrder);
    
    if (this.currentOrder == 0) {
      teamArray.sort((a,b) => a.name.localeCompare(b.name));
      this.currentOrder = 1;
      // console.log(teamArray);
      // console.log(this.team.channels);
      // console.log("Orden ascendente: ", this.currentOrder);
    } else if (this.currentOrder == 1) {
      teamArray.sort((a,b) => b.name.localeCompare(a.name));
      this.currentOrder = 2;
      // console.log(teamArray);
      // console.log(this.team.channels);
      // console.log("Orden descendente: ", this.currentOrder);
    }  else if (this.currentOrder == 2) {
      teamArray.sort((a,b) => a.index - b.index);
      this.currentOrder = 0;
      // console.log(teamArray);
      // console.log(this.team.channels);
      // console.log("Orden original: ", this.currentOrder);
    }  

  }

}
