 class Customer{ //java'da public olan js'de exporttur
    constructor(id,customerNumber){
        this.id=id;
        this.customerNumber=customerNumber
    }
}

let customer=new Customer(1,"12345");
//Prototyping , bir nesneye bambaşka bir özellik ekleyebiliyoruz
customer.name="Murat Kurtboğan";
console.log(customer.name)

Customer.bisey="Bişey"
console.log(Customer.bisey)
console.log(customer.customerNumber)


class IndividualCustomer extends Customer{
    constructor(firstName,id,customerNumber){
        super(id,customerNumber) //Super extends edileni çalıştırır yani Customer'ı
        this.firstName=firstName
    }
}

class CorporateCustomer extends Customer{
     constructor(firstName,id,customerNumber){
        super(id,customerNumber) //Super extends edileni çalıştırır yani Customer'ı
        this.companyName=companyName
     }
}
