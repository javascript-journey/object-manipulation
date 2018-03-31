let cars = [];

let readCar = (data) => {
	data.forEach((car) => {
		console.log(`Warna mobil: ${car.warna}`);
		console.log(`Merk: ${car.merk}`);
		console.log(`Mobil Balap: ${(car.balap == true ? 'Ya' : 'Bukan')}`);
		car.hidupkan();
		car.majukan();
		car.matikan();
		console.log();
	});
}

let createCar = (data) => {
	cars.push(data);
}

let updateCar = (index, newData) => {
	cars[index] = newData;
}

let deleteCar = (index) => {
	delete cars[index];
}

const car1 = {
	warna: 'merah',
	merk: 'ferary',
	balap: true,
	hidupkan: () => {
		console.log('mobil hidup');
	},
	matikan: () => {
		console.log('mobil mati');
	},
	majukan: () => {
		console.log('mobil maju');
	}
};

const car2 = {
	warna: 'hitam',
	merk: 'kijang',
	balap: false,
	hidupkan: () => {
		console.log('mobil hidup');
	},
	matikan: () => {
		console.log('mobil mati');
	},
	majukan: () => {
		console.log('mobil maju');
	}
};

const car3 = {
	warna: 'biru',
	merk: 'toyota',
	balap: false,
	hidupkan: () => {
		console.log('mobil hidup');
	},
	matikan: () => {
		console.log('mobil mati');
	},
	majukan: () => {
		console.log('mobil maju');
	}
};

const car4 = {
	warna: 'kuning',
	merk: 'avanza',
	balap: false,
	hidupkan: () => {
		console.log('mobil hidup');
	},
	matikan: () => {
		console.log('mobil mati');
	},
	majukan: () => {
		console.log('mobil maju');
	}
};

// membuat car
createCar(car1);
createCar(car2);
createCar(car3);

console.log("semua car:");
readCar(cars);

console.log("update car ketiga:");
updateCar(2, car4);
readCar(cars);

console.log("hapus car pertama:");
deleteCar(0);
readCar(cars);

