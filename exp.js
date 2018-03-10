var expObj = { 
	takeSensitive: function() {
		expObj.s100 = document.getElementById('s100').checked;
		expObj.s200 = document.getElementById('s200').checked;
		expObj.s400 = document.getElementById('s400').checked;
		expObj.s800 = document.getElementById('s800').checked;
		expObj.sensitive = (expObj.s100 === true) ? 7 :
			(expObj.s200 === true) ? 5 :
			(expObj.s400 === true) ? 3 :
			(expObj.s800 === true) ? 1 : 7;
	},
	takeAperture: function() {
		expObj.aperture = document.getElementById('aperture').value;
	},
	takeScene: function() {
		expObj.scene = document.getElementById('scene').value;
	},
	takeWeather: function() {
		expObj.weather = document.getElementById('weather').value;
	},
	takeDateTime: function() {
		expObj.now = new Date();
		expObj.date = expObj.now.getMonth();
		expObj.hour = expObj.now.getHours();
	},
	convertDateTime: function() {
		expObj.arrDateTime = [
			[99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 9, 6, 5, 4, 5, 6, 9, 99, 99, 99, 99, 99, 99, 99],
			[99, 99, 99, 99, 99, 99, 99, 99, 99, 9, 5, 4, 4, 3, 4, 4, 5, 9, 99, 99, 99, 99, 99, 99],
			[99, 99, 99, 99, 99, 99, 99, 99, 8, 5, 4, 3, 2, 2, 2, 3, 4, 5, 8, 99, 99, 99, 99, 99],
			[99, 99, 99, 99, 99, 99, 99, 8, 5, 3, 2, 2, 1, 1, 1, 2, 2, 3, 5, 8, 99, 99, 99, 99],
			[99, 99, 99, 99, 99, 99, 8, 6, 4, 2, 1, 1, 1, 1, 1, 1, 1, 2, 4, 6, 8, 99, 99, 99],
			[99, 99, 99, 99, 99, 99, 7, 4, 3, 2, 1, 0, 0, 0, 0, 0, 1, 2, 3, 4, 7, 99, 99, 99],
			[99, 99, 99, 99, 99, 99, 7, 4, 3, 2, 1, 0, 0, 0, 0, 0, 1, 2, 3, 4, 7, 99, 99, 99],
			[99, 99, 99, 99, 99, 99, 8, 6, 4, 2, 1, 1, 1, 1, 1, 1, 1, 2, 4, 6, 8, 99, 99, 99],
			[99, 99, 99, 99, 99, 99, 99, 8, 5, 3, 2, 2, 1, 1, 1, 2, 2, 3, 5, 8, 99, 99, 99, 99],
			[99, 99, 99, 99, 99, 99, 99, 99, 8, 5, 4, 3, 2, 2, 2, 3, 4, 5, 8, 99, 99, 99, 99, 99],
			[99, 99, 99, 99, 99, 99, 99, 99, 99, 9, 5, 4, 4, 3, 4, 4, 5, 9, 99, 99, 99, 99, 99, 99],
			[99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 9, 6, 5, 4, 5, 6, 9, 99, 99, 99, 99, 99, 99, 99]
		];
		expObj.mh = expObj.arrDateTime[expObj.date][expObj.hour];
	},
	calcShutter: function() {
		expObj.takeDateTime();
		expObj.convertDateTime();
		if (expObj.mh < 99) {
			expObj.takeSensitive();
			expObj.takeAperture();
			expObj.takeScene();
			expObj.takeWeather();
			expObj.s = (+expObj.sensitive) + (+expObj.aperture) + (+expObj.scene) + (+expObj.weather) + (+expObj.mh) + 1;
		} else {
			expObj.s = 'err';
		}
	},
	convertShutter: function() {
		if (expObj.s == 'err') {
			expObj.shutter = 'Солнце ушло спать!:(';
		} else if ((+expObj.s) < 24) {
			expObj.shutter = 'Прикройте диафрагму';
		} else if ((+expObj.s) > 46) {
			expObj.shutter = 'Откройте диафрагму';
		} else {
			switch (+expObj.s) {
				case 24:
					expObj.shutter = '1/1000';
					break;
				case 25:
					expObj.shutter = '1/1000 или 1/500';
					break;
				case 26:
					expObj.shutter = '1/500';
					break;
				case 27:
					expObj.shutter = '1/500 или 1/250';
					break;
				case 28:
					expObj.shutter = '1/250';
					break;
				case 29:
					expObj.shutter = '1/250 или 1/125';
					break;
				case 30:
					expObj.shutter = '1/125';
					break;
				case 31:
					expObj.shutter = '1/125 или 1/60';
					break;
				case 32:
					expObj.shutter = '1/60';
					break;
				case 33:
					expObj.shutter = '1/60 или 1/30';
					break;
				case 34:
					expObj.shutter = '1/30';
					break;
				case 35:
					expObj.shutter = '1/30 или 1/15';
					break;
				case 36:
					expObj.shutter = '1/15';
					break;
				case 37:
					expObj.shutter = '1/15 или 1/8';
					break;
				case 38:
					expObj.shutter = '1/8';
					break;
				case 39:
					expObj.shutter = '1/8 или 1/4';
					break;
				case 40:
					expObj.shutter = '1/4';
					break;
				case 41:
					expObj.shutter = '1/4 или 1/2';
					break;
				case 42:
					expObj.shutter = '1/2';
					break;
				case 43:
					expObj.shutter = '1/2 или 1\"';
					break;
				case 44:
					expObj.shutter = '1\"';
					break;
				case 45:
					expObj.shutter = '1\" или 2\"';
					break;
				case 46:
					expObj.shutter = '2\"';
					break;
			}
		}


	},
	show: function() {
		expObj.calcShutter();
		expObj.convertShutter();
		document.getElementById('result').innerHTML = expObj.shutter; //May be deleted

	}
}
//document.getElementsByName('sensitive').item()
document.getElementById('s100').onchange = expObj.show;
document.getElementById('s200').onchange = expObj.show;
document.getElementById('s400').onchange = expObj.show;
document.getElementById('s800').onchange = expObj.show;
document.getElementById('aperture').onchange = expObj.show;
document.getElementById('scene').onchange = expObj.show;
document.getElementById('weather').onchange = expObj.show;