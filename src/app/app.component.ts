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
    switch (this.operandCheck) {
    case false:
      this.firstNumber = this.firstNumber + num
      break;
    case true:
      this.secondNumber = this.secondNumber + num
  }

    this.result = this.result + num
  }

  //Switches 
  pressOperator(op: string) {
    switch (op) {
    case '+':
      Number(this.firstNumber) + Number(this.secondNumber)
      this.result = this.result + op

      break;
    case '-':
      Number(this.firstNumber) - Number(this.secondNumber)
      this.result = this.result + op

      break;
    case '*':
      Number(this.firstNumber) * Number(this.secondNumber)
      this.result = this.result + op

      break;
    case '/':
      Number(this.firstNumber) / Number(this.secondNumber)
      this.result = this.result + op

      break;
    case '=':
      this.result = String(this.firstNumber)
    }
  }

  clear(){
    this.result = ""
    this.firstNumber = ""
    this.secondNumber = ""
    this.operandCheck = false;
  }



  
}