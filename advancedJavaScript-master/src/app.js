//npm install kurulum yapmaya yarar: cmd'de yaz
//npm run projeyi çalıştıracağım anlama gelir
//index.html dosyasında js kodları birbirini import ederek çalışır
//undefined demek böyle bir şey yok demek,null bellekte değeri var ama referansı yok 

let sayi1=10;
sayi1="Engin Demiroğ"
let student={id:1,name:"Engin"}
//console.log(student);

function save(puan=10,ogrenci){
    console.log(ogrenci.name + " : " + puan);
}
//save(undefined,student) //undefined defaultunu almamıza yarar,yani puan 10'u

let students = ["Engin Demiroğ","Halit Kalaycı","Engin Toprak","Büşra"]
//console.log(students)

let students2=[student,{id:2,name:"Halit"},"Ankara",{city:"İstanbul"}]
//console.log(students2)


//rest- geriye kalan demek,REST ile parametreye istediğimiz kadar parametre yollarız o array olara tutulur
//c# params ile aynı 
let showProducts=function (id,...products){ 
    console.log(id);
    console.log(products[0]);
}
//console.log(typeof showProducts)
//showProducts(10,"Elma","Armut","Karpuz") //buradaki elemanlar products içinde array olarak tutuluyor


//spread-ayrıştırmak demek , spread bir arrayı parametre gibi virgülle ayırmaya yarıyor
let points=[1,2,3,4,50,4,60,14]
console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC","D",..."EFG","H")


//Destructuring,elinizdeki arrayın değerlerini değişkenlere atama yöntemi
let populations=[10000,20000,30000,[40000,100000]]
let [small,medium,high,[veryHigh,maximum]] = populations //populationsu small,medium,high değerlerine aktarır
console.log(small)
console.log(medium)
console.log(high) 
console.log(veryHigh)
console.log(maximum)

function someFunction([small1,number]){
    console.log(small1)
   
}
someFunction(populations) 

let category={id:1,name:İçecek}
console.log(category.id)
console.log(category.name)

let {id,name} =category
console.log(id)
console.log(name)