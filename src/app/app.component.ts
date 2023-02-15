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
  finalNumber: number = 0;
  result: string = '';

  //Checks operand to send value to number1 or number2 for calculation
  pressNum(num: number) {
    switch (this.operandCheck) {
    case false:
      this.firstNumber = this.firstNumber + num 
      break;
    case true:
      this.secondNumber = this.secondNumber + num
  }

    this.result = this.result + num
  }



  //operator buttons
  pressOperator(op: string) {
    this.operator = this.operator + op
    this.result = this.result + this.operator
    this.operandCheck = true;

  }

  //the shit
  calcFormula(operatorInput: string) {
    switch (operatorInput) {
      case '+':
        this.finalNumber = parseInt(this.firstNumber) + parseInt(this.secondNumber)
        break;
      case '-':
        this.finalNumber = parseInt(this.firstNumber) - parseInt(this.secondNumber)
        break;
      case 'x':
        this.finalNumber = parseInt(this.firstNumber) * parseInt(this.secondNumber)
        break;
      case '/':
        this.finalNumber = parseInt(this.firstNumber) / parseInt(this.secondNumber)
        break;
      }

  }

  useFormula() {
      this.calcFormula(this.operator);
      this.result = String(this.finalNumber);

  }

  clear(){
    this.result = ""
    this.firstNumber = ''
    this.secondNumber = ''
    this.operandCheck = false;
    this.operator = ""
  }



  
}