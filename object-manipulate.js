var mobil = []
const mobilA = { 
  nama: 'Vios',
  mesin: 'Toyota',
  warna: 'Merah',
  tipe: 'Sedan',
  balap: true, 
  hidupkan: () => {
    console.log(' Mobil Hidup')
  },
  matikan: () => {
    console.log(' Mobil Mati')
  },
  maju: () => {
    console.log(' Mobil Maju')
  },
  mundur: () => {
    console.log(' Mobil Mundur')
  }
}
const mobilB = { 
  nama: 'Jazz',
  mesin: 'Honda',
  warna: 'Biru',
  tipe: 'Hatchback',
  balap: false, 
  hidupkan: () => {
    console.log(' Mobil Hidup')
  },
  matikan: () => {
    console.log(' Mobil Mati')
  },
  maju: () => {
    console.log(' Mobil Maju')
  },
  mundur: () => {
    console.log(' Mobil Mundur')
  }
}

const mobilC = { 
  nama: 'Juke',
  mesin: 'Nissan',
  warna: 'Putih',
  tipe: 'SUV',
  balap: false, 
  hidupkan: () => {
    console.log(' Mobil Hidup')
  },
  matikan: () => {
    console.log(' Mobil Mati')
  },
  maju: () => {
    console.log(' Mobil Maju')
  },
  mundur: () => {
    console.log(' Mobil Mundur')
  }
}

mobil.push(mobilA,mobilB,mobilC)

function readCar (mobil) {
 //tampilkan dalam bentuk yang rapih
 console.log("Daftar Mobil Andaglos // fungsi readCar")
 console.log("")
 mobil.forEach(function(item,index){
  if (item.balap === true) {
    item.balap = "Ya"
  }else{
    item.balap = "Bukan"
  }

  console.log(`${index + 1}. Mobil ${item.nama} dengan Spesifikasi berikut :`)
  console.log(" a. Mesin :",item.mesin)
  console.log(" b. warna :",item.warna)
  console.log(" c. Tipe :",item.tipe)
  console.log(" d. Balap :",item.balap)
  console.log("")
  item.hidupkan(),item.matikan(),item.maju(),item.mundur()
  console.log("")
})
}

function createCar (data) {
  //tambahkan mobil baru ke array of object cars
  mobil.push(data)
  console.log("")
  console.log(`Berhasil Menambahkan Mobil ${data.nama} dengan Spesifikasi berikut :// fungsi createCar`)
  if (data.balap === true) {
    data.balap = "Ya"
  }else{
    data.balap = "Bukan"
  }
  console.log(" a. Mesin :",data.mesin)
  console.log(" b. Warna :",data.warna)
  console.log(" c. Tipe :",data.tipe)
  console.log(" d. Balap :",data.balap)  
  data.hidupkan()
  data.matikan()
  data.maju()
  data.mundur()
  console.log("")
}
function updateCar (index, newData) {
  // update object mobil yang dipilih
  let mobil_lama = mobil[index].nama
  mobil[index].nama = newData.nama
  mobil[index].mesin = newData.mesin
  mobil[index].warna = newData.warna
  mobil[index].tipe = newData.tipe 
  mobil[index].balap = newData.balap
  console.log("")
  console.log(`Berhasil Merubah Mobil ${mobil_lama} menjadi ${newData.nama} dengan Spesifikasi berikut :// fungsi updateCar`)
  if (newData.balap === true) {
    newData.balap = "Ya"
  }else{
    newData.balap = "Bukan"
  }
  console.log(" a. Mesin :",mobil[index].mesin)
  console.log(" b. warna :",mobil[index].warna)
  console.log(" c. Tipe :",mobil[index].tipe )
  console.log(" d. Balap :",mobil[index].balap)
  mobil[index].hidupkan()
  mobil[index].matikan()
  mobil[index].maju()
  mobil[index].mundur()
  console.log("")
}
function deleteCar (index) {
  // hapus mobil yang pilih
  let nama_mobil = mobil[index].nama
  mobil.splice(index,1)
  console.log(`Berhasil Menghapus Mobil ${nama_mobil} yang berada di index ke ${index} // fungsi deleteCar`)
}


readCar(mobil)

createCar({ 
  nama: 'Xenia',
  mesin: 'Daihatsu',
  warna: 'Hitam',
  tipe: 'MPV',
  balap: false, 
  hidupkan: () => {
    console.log(' Mobil Hidup')
  },
  matikan: () => {
    console.log(' Mobil Mati')
  },
  maju: () => {
    console.log(' Mobil Maju')
  },
  mundur: () => {
    console.log(' Mobil Mundur')
  }
})

updateCar (0,{ 
  nama: 'Fuso',
  mesin: 'Hino',
  warna: 'Hijau',
  tipe: 'Angkutan',
  balap: false, 
  hidupkan: () => {
    console.log(' Mobil Hidup')
  },
  matikan: () => {
    console.log(' Mobil Mati')
  },
  maju: () => {
    console.log(' Mobil Maju')
  },
  mundur: () => {
    console.log(' Mobil Mundur')
  }
}) 

deleteCar(0)




