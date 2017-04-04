import { Component } from '@angular/core';

@Component({
  selector: 'app-generate-rut',
  templateUrl: './generate-rut.component.html',
  styleUrls: ['./generate-rut.component.css']
})
export class GenerateRutComponent {

	public generatedRUT;

	generateRUTButton () {
		this.generatedRUT = this.getRUT();
	}

	rnd () {
		return Math.floor(Math.random()*9);
	}

	getRUT () {
		var coefs = [3, 2, 7, 6, 5, 4, 3, 2];
		var digits = [];
		var i;
		var total = 0;

		for(i=0;i<8;++i) {
			var digit = this.rnd();
			total+=coefs[i]*digit;
			digits.push(digit);
		}

		digits.push("-");
		digits.push(11-(total%11));
		return digits.join('');
	}

}
