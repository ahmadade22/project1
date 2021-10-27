/* Variable */
// var nama = "ade" (variable dalam js lama)
// $nama = "Ade"; (variable dalam php)

let nama_depan = "ahmad";
let nama_belakang = "ade";
let nama_lengkap = nama_depan + " " + nama_belakang;


let barang = 80;
let jumlah = 100;
let total = barang + jumlah;

/* constant */
const country = "indonesia"
const database = "pelatihan"

/* Data Type */
// Silakan lihat javascript.info

/* operator */

/* alert */
let cookie;
cookie = "ahmad 2021";

let cookie2 = "ade 2021";

/* output */
//alert(cookie);
//console.log(cookie2);
console.log("total barang" + total);
document.write ("test dulu");

/*conditional*/
if (nama_lengkap ==  "ahmad ade"){
    alert ("selamat datang" +" " + nama_lengkap);
} else {
    alert ("maaf, anda siapa?");
}


/* loop */

for (let i = 0; i <=10; i++) {
    //console.log ("loop 2" + i);
}


let j = 0;
while (j <= 10) {
    //console.log("loop 2" + j);
    j++;
}

let k = 0;
do {
    //console.log("loop 3" + k);
    k++;
} while (k <= 10);


/*function*/
function greating() {
    if (nama_lengkap) {
        console.log ("user aman bisa masuk web");
    } else{
        console.log ("user tidak aman, jangan masuk");
    }
}

greating ();

function login(username, password) {
    if(username && password){
    console.log("Selamat datang");
    console.log("username: " + username);
    console.log("password: " + password);
    } else if(username || password) {
    console.log ("username atau password salah");
    } else {
    console.log ("anda belum login");
    }
}

let uname = "budi";
let pass = "1234";
login(uname, pass);

function LuasSegitiga (alas, tinggi) {
let luas = (alas * tinggi)/2;
return luas;
}

function LuasSegitiga2 (alas, tinggi) {
let luas = (alas * tinggi)/2;
console.log(luas);
}

let alas = 10;
let tinggi = 5;
let luas = LuasSegitiga (alas, tinggi);
console.log(luas);


/*strukur data*/
let datamhs = ["Ahmad, Ade, Irwanda"];

let biodatamhs = {
    nama: "Ahmad",
    tempat_lahir: "Pekanbaru",
    negara: "Indonesia"
};

let biodatamhs2 = {
    nim: "11",
    biodata: {
        nama: "Ahmad",
        tempat_lahir: "Pekanbaru",
        negara: "Indonesia"
    }