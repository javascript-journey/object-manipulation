let cars = [];

readCar = (data) => {
 //tampilkan dalam bentuk yang rapih
 data.forEach((cars) => {
 	let descriptionCar = `Mobil ${cars.balap == true ? 'Sport' : ''} ${cars.tipe} ${cars.warna}`;
 	console.log(`${descriptionCar}`);
 	
 	cars.hidupkan();
 	cars.maju();
 	cars.mundur();
 	cars.matikan();
 	console.log();

 });
}

createCar = (data) => {
  //tambahkan mobil baru ke array of object cars
  cars.push(data);
}

updateCar = (index, newData) => {
  // update object mobil yang dipilih
  cars[index] = newData;
}

deleteCar = (index) => {
  // hapus mobil yang pilih
  delete cars[index];
}

const carA = { 
	warna: 'Merah',
	tipe: 'Ferrari',
	balap: true, 
	hidupkan: () => {
		console.log('Mobil Dihidupkan')
	},
	maju: () => {
		console.log('Mobil Dimajukan')
	},
	mundur: () => {
		console.log('Mobil Dimundurkan')
	},
	matikan: () => {
		console.log('Mobil Dimatikan')
	}
}

const carB = { 
	warna: 'Kuning',
	tipe: 'Brio',
	balap: false, 
	hidupkan: () => {
		console.log('Mobil Dihidupkan')
	},
	maju: () => {
		console.log('Mobil Dimajukan')
	},
	mundur: () => {
		console.log('Mobil Dimundurkan')
	},
	matikan: () => {
		console.log('Mobil Dimatikan')
	}
}

const carC = { 
	warna: 'Hijau',
	tipe: 'Lamborghini',
	balap: true, 
	hidupkan: () => {
		console.log('Mobil Dihidupkan')
	},
	maju: () => {
		console.log('Mobil Dimajukan')
	},
	mundur: () => {
		console.log('Mobil Dimundurkan')
	},
	matikan: () => {
		console.log('Mobil Dimatikan')
	}
}

const carD = { 
	warna: 'Biru',
	tipe: 'Formula 1',
	balap: true, 
	hidupkan: () => {
		console.log('Mobil Dihidupkan')
	},
	maju: () => {
		console.log('Mobil Dimajukan')
	},
	mundur: () => {
		console.log('Mobil Dimundurkan')
	},
	matikan: () => {
		console.log('Mobil Dimatikan')
	}
}

// Menambahkan Mobil
createCar(carA);
createCar(carB);
createCar(carC);

// Menampilkan Mobil
console.log('SEMUA MOBIL : \n')
readCar(cars);


// Mengubah Mobil
console.log('MENGUBAH MOBIL Brio Kuning: \n')
updateCar(1, carD)
readCar(cars);

//Menghapus Mobil
console.log('MENGHAPUS MOBIL Formula 1 Biru: \n')
deleteCar(1);
readCar(cars);