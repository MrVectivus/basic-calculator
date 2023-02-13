import { Component } from '@angular/core';
import { first } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';

  //Variables
  firstNumber: string = '';
  operator: string = '';
  operandCheck: boolean = false;
  secondNumber: string = '';
  result: string = '';

  //Checks operand to send value to number1 or number2 for calculation
  pressNum(num: string) {
    if (this.operandCheck = false){
      this.firstNumber = this.firstNumber + num
    }
    else {
      this.secondNumber = this.secondNumber + num
    }

    this.result = this.result + num
  }

  //Switches operandCheck boolean
  pressOperator(op: string) {
    this.operator = this.operator + op
    this.operandCheck = true;
    this.result = this.result + op
  }

  calcAnswer(){
    if (this.operator = '+'){
      Number(this.firstNumber) + Number(this.secondNumber)
    }
    else if (this.operator = "-"){
      Number(this.firstNumber) - Number(this.secondNumber)
    }
    else if (this.operator = "*"){
      Number(this.firstNumber) * Number(this.secondNumber)
    }
    else if (this.operator = "/"){
      Number(this.firstNumber) / Number(this.secondNumber)
    }
    else if (this.operator = "=") {
      this.result = String(this.firstNumber)
    }

    }

  clear(){
    this.result = ""
  }



  
}