import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tic-Tac-Toe';
  winMessage:string  = '';
  isCross = false;
  // Each index initalised with empty
  itemArray : string[] = new Array(9).fill('empty');

  // Constructor Injection so that we can use it as soon as application/component runs
  constructor(private toastr: ToastrService){

  }

handleClick = (index:number) => {
if(this.winMessage!==''){
  return this.toastr.success(this.winMessage);
}
else if(this.itemArray[index] === 'empty'){
  this.itemArray[index] = this.isCross ? 'cross' : 'circle';
  this.isCross = !this.isCross;
  return ;
}
else {
  return this.toastr.warning('Already Filled');
}
this.isWinner();
}

  isWinner= () => {
    // Rows 
     if(this.itemArray[0] !== 'empty'  && this.itemArray[0] === this.itemArray[1]  && this.itemArray[0] === this.itemArray[2]){
     this.winMessage = `${this.itemArray[0]} won `; 
    }
    else if(this.itemArray[3] !== 'empty'  && this.itemArray[3] === this.itemArray[4]  && this.itemArray[3] === this.itemArray[5]){
      this.winMessage = `${this.itemArray[3]} won `; 
     }
     else if(this.itemArray[6] !== 'empty'  && this.itemArray[6] === this.itemArray[7]  && this.itemArray[6] === this.itemArray[8]){
      this.winMessage = `${this.itemArray[6]} won `; 
     }
    //  Columns 
     else if(this.itemArray[0] !== 'empty'  && this.itemArray[0] === this.itemArray[3]  && this.itemArray[0] === this.itemArray[6]){
      this.winMessage = `${this.itemArray[0]} won `; 
     }
     else if(this.itemArray[1] !== 'empty'  && this.itemArray[1] === this.itemArray[4]  && this.itemArray[1] === this.itemArray[7]){
      this.winMessage = `${this.itemArray[1]} won `; 
     }
     else if(this.itemArray[2] !== 'empty'  && this.itemArray[2] === this.itemArray[5]  && this.itemArray[2] === this.itemArray[8]){
      this.winMessage = `${this.itemArray[2]} won `; 
     }
    //  Diagonals
     else if(this.itemArray[0] !== 'empty'  && this.itemArray[0] === this.itemArray[4]  && this.itemArray[0] === this.itemArray[8]){
      this.winMessage = `${this.itemArray[0]} won `; 
     }
     else if(this.itemArray[2] !== 'empty'  && this.itemArray[2] === this.itemArray[4]  && this.itemArray[2] === this.itemArray[6]){
      this.winMessage = `${this.itemArray[2]} won `; 
     }
  }

  reloadGame = ()=> {
    this.winMessage = '';
    this.isCross = false;
    this.itemArray = new Array(9).fill('empty');
  }
}
