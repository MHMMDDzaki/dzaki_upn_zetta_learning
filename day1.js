// const book = [
//     {name:"Sword Art Online",price:120000,printing_status:true},
//     {name:"Harry Potter",price:140000,printing_status:true},
//     {name:"Uncharted",price:110000,printing_status:false}
// ]

// function purchaseBook(name){
//     let status = ""
//     for(let i = 0; i<book.length; i++){
//         if(book[i].name == name) {
//             status = "ada"
//             break
//         } else {
//             status = "tidak ada"
//         }
//     }
//     return console.log(status)
// }

// purchaseBook("Harry Potter")
let tax = 10
let discount = 20

function purchaseBook(param1,param2,param3){
    let title = param1
    let price = param2
    let print_status = param3

    const totalDiscount = price * (discount/100)
    const priceAfterDiscount = price - totalDiscount
    const totalTax = priceAfterDiscount * (tax/100)
    const priceAfterTax = priceAfterDiscount - totalTax

    console.group()
    console.log("Original Price ", price)
    console.log("Discount Amount ", totalDiscount)
    console.log("Price after discount ", priceAfterDiscount)
    console.log("tax amount ", totalTax)
    console.log("Price after tax ", priceAfterTax)
    console.groupEnd()
}

purchaseBook("Harry Potter",120000,true)