import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-calculator',
  templateUrl: 'calculator.html',
})

export class CalculatorPage {
  units: string = "metric";
  heightMetric: number;
  weightMetric: number;
  heightImperial: number;
  weightImperial: number;

  bmiValue: number;
  bmiMessage: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  calculateMetricBMI() {
    if (this.weightMetric > 0 && this.heightMetric > 0) {
      let finalBmi = this.weightMetric / (this.heightMetric / 100 * this.heightMetric / 100);
      this.bmiValue = parseFloat(finalBmi.toFixed(2));
      this.setBMIMessage();
    }
  }

  calculateImperialBMI() {
    if (this.weightImperial > 0 && this.heightImperial > 0) {
      let finalBmi = (this.weightImperial * 703) / (this.heightImperial * this.heightImperial);
      this.bmiValue = parseFloat(finalBmi.toFixed(2));
      this.setBMIMessage();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculatorPage');
  }

  private setBMIMessage() {
    if (this.bmiValue < 18.5) {
      this.bmiMessage = "Underweight"
    }

    if (this.bmiValue > 18.5 && this.bmiValue < 25) {
      this.bmiMessage = "Normal"
    }

    if (this.bmiValue > 25 && this.bmiValue < 30) {
      this.bmiMessage = "Overweight"
    }

    if (this.bmiValue > 30) {
      this.bmiMessage = "Obese"
    }
  }
}
