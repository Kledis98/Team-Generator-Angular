import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Team-Generator';

  members:string[] = [];
  addNewName:string = '';
  errorMessage:string = '';
  numberOfTeams:number | ''  = '';
  teams:string[][] = []

  addMember(){

    if(!this.addNewName){
      this.errorMessage = 'There is an error, no empty name is allowed';
      return;
    }
  

    this.members.push(this.addNewName);
    this.addNewName='';
    this.errorMessage='';
  }

  onInput(name:string){
    this.addNewName = name;
  }

  onInputOfTeams(teamsNr:string){
    this.numberOfTeams = Number(teamsNr);
    console.log(teamsNr)
  }

  
  generateTeams(){

    //reference to the array we had above, mutating the oldMembers now instead of the state above 
    const allMembers = [ ... this.members]

    if(!this.numberOfTeams || this.numberOfTeams<=0){
      this.errorMessage = 'Invalid values'
      return;
    }
    
    if(this.members.length < this.numberOfTeams){
      this.errorMessage = 'Invalid number of teams'
      return;
    }

   while(allMembers.length){
    for(let i=0; i<this.numberOfTeams; i++){
      const randomIndex = Math.floor(Math.random() * allMembers.length)
      console.log(randomIndex);

    //remove element when we have that randomIndex with splice()

    const member = allMembers.splice(randomIndex,1)[0]
      if(!member){break;}
    if(this.teams[i]){
      this.teams[i].push(member)
    }else{
      this.teams[i]=[member]
    }

  }
   }
   this.members =[]
   this.numberOfTeams='';
    console.log(this.teams)
  }
  
}
