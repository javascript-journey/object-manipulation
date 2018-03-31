let mobils = [];

let readCar = (data) => {
  //tampilkan dalam bentuk yang rapih

  	data.forEach((mobil) => { 
    console.log(`Warna Mobil: ${mobil.warna}`); 
    console.log(`Merk: ${mobil.merk}`); 
    console.log(`Mobil Balap: ${(mobil.balap == true ? 'Ya' : 'Bukan')}`); 
    mobil.hidupkan(mobil.warna,mobil.merk,mobil.balap); 
    mobil.majukan(mobil.warna,mobil.merk,mobil.balap); 
    mobil.matikan(mobil.warna,mobil.merk,mobil.balap); 
    console.log("========"); 
  });
}

let createCar = (data) => { 
  mobils.push(data); 
} 

let updateCar = (index, newData) => { 
  console.log("Ubah Mobil Toyota Biru");
  mobils[index] = newData;
  console.log("========");  

} 
 
let deleteCar = (index) => { 
	console.log("Hapus Mobil BMW Hijau");
  delete mobils[index];
  console.log("========");  
} 


const car1 = { 
  warna: 'Hijau', 
  merk: 'BMW', 
  balap: true, 
  hidupkan: (warna,merk,balap) => { 
    console.log('Mobil merk '+merk+' warna '+warna+' telah Dihidupkan'); 
  }, 
  matikan: (warna,merk,balap) => { 
    console.log('Mobil merk '+merk+' warna '+warna+' telah Dimatikan'); 
  }, 
  majukan: (warna,merk,balap) => { 
    console.log('Mobil merk '+merk+' warna '+warna+' telah Dimajukan'); 
  } 
}; 
 
const car2 = { 
  warna: 'Biru', 
  merk: 'Toyota', 
  balap: false, 
  hidupkan: (warna,merk,balap) => { 
    console.log('Mobil merk '+merk+' warna '+warna+' telah Dihidupkan'); 
  }, 
  matikan: (warna,merk,balap) => { 
    console.log('Mobil merk '+merk+' warna '+warna+' telah Dimatikan'); 
  }, 
  majukan: (warna,merk,balap) => { 
    console.log('Mobil merk '+merk+' warna '+warna+' telah Dimajukan'); 
  } 
}; 
 
const car3 = { 
  warna: 'Hitam', 
  merk: 'Jeep', 
  balap: false, 
  hidupkan: (warna,merk,balap) => { 
    console.log('Mobil merk '+merk+' warna '+warna+' telah Dihidupkan'); 
  }, 
  matikan: (warna,merk,balap) => { 
    console.log('Mobil merk '+merk+' warna '+warna+' telah Dimatikan'); 
  }, 
  majukan: (warna,merk,balap) => { 
    console.log('Mobil merk '+merk+' warna '+warna+' telah Dimajukan'); 
  } 
}; 
 
const car4 = { 
  warna: 'Merah', 
  merk: 'Daihatsu', 
  balap: true, 
  hidupkan: (warna,merk,balap) => { 
    console.log('Mobil merk '+merk+' warna '+warna+' telah Dihidupkan'); 
  }, 
  matikan: (warna,merk,balap) => { 
    console.log('Mobil merk '+merk+' warna '+warna+' telah Dimatikan'); 
  }, 
  majukan: (warna,merk,balap) => { 
    console.log('Mobil merk '+merk+' warna '+warna+' telah Dimajukan'); 
  } 
}; 
console.log('Daftar Mobil Awal'); 
console.log('-----------------'); 	
// membuat mobil 
createCar(car1); 
createCar(car2); 
createCar(car3); 

//membaca mobil
readCar(mobils);

//mengubah mobil
updateCar(1, car4); 

//menghapus mobil
deleteCar(0); 

console.log('Daftar Mobil Terakhir'); 	
console.log('-----------------'); 	
readCar(mobils);  




