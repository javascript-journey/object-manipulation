# object-manipulation

Dalam kehidupan di dunia, semua nya bersifat object, yang namanya object pasti punya ciri-ciri dan bisa melakukan suatu tugas.
Contoh seperti object mobil. 

Ada mobil yang punya warna merah, pintu 2 , pintu 4, ukurna yang besar ada juga yang kecil.Tentu mobil dapat melaju ke depan dan melaju ke belakang.

Kita akan coba buat object mobil itu dalam kode javascript.

```

/*

mobil warna merah, tipe sedan, mobil balap
mobil bisa di hidupkan, dimatikan dan dijalankan 
*/

const mobil = { 
  warna: 'merah',
  tipe: 'sedan',
  balap: true, 
  hidupkan: () => {
    console.log('mobil hidup')
  },
  matikan: () => {
    console.log('mobil mati')
  },
  maju: () => {
    console.log('mobil maju')
  }
}
```
oke kita sudah punya object dengan nama mobil, yang punya beberapa property. Bagaimana mengakses property dalam object ?

### Mengakses Property Dalam Object

```

// jika ingin mengakses data property

mobil.namaProperty
mobil.warna

// atau bisa juga dengan ['property']

mobil['namaProperty']
mobil['tipe']

// jika ingin mengakses method property 

mobil.namaProperty()
mobil.hidupkan()

```

### Mengassingn data ke dalam property object

Sudah bisa mengakses property nya, maka kita harus bisa juga meng assign data baru ke dalam property. 

Misal contoh mobil data, kita ingin merubah warnanya jadi biru maka cara nya:

```

mobil.warna = 'biru'

```



#Tugas Manipulation Object

Buatlah crud object mobil.

#### Skeleton Code

```
var cars = [car1, car2, car3]

function readCar (data) {
 //tampilkan dalam bentuk yang rapih
}

function createCar (data) {
  //tambahkan mobil baru ke array of object cars

}

function updateCar (index, newData) {
  // update object mobil yang dipilih

}

function deleteCar (index) {
  // hapus mobil yang pilih
}

```

**Note:** Tugas di kumpulkan paling lama besok siang jam 12, karena sore nya akan ada ujian.
