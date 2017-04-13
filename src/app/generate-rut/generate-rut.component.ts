import { Component, OnInit } from '@angular/core';
//import { Clipboard } from 'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/1.6.0/clipboard.min';

@Component({
  selector: 'app-generate-rut',
  templateUrl: './generate-rut.component.html',
  styleUrls: ['./generate-rut.component.css']
})
export class GenerateRutComponent implements OnInit {

  text1: string;
  text2: string;

	public generatedRUT;

	ngOnInit() {
		//new Clipboard('.btn');
	}

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
