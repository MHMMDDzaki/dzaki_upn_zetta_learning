const book = [
    { name: "Sword Art Online", price: 120000, printing_status: true, stock: 10, purchased: 5 },
    { name: "Harry Potter", price: 140000, printing_status: true, stock: 10, purchased: 5 },
    { name: "Uncharted", price: 110000, printing_status: false, stock: 0, purchased: 0 },
    { name: "Mushoku Tensei", price: 110000, printing_status: true, stock: 0, purchased: 10 }
]


let pricePayPerMonth = 0
let status = ""
let interest = 3
let creditDue = 30
let tax = 10
let discount = 20

// function purchaseBook(name,purchasing) {
//     for (let i = 0; i < book.length; i++) {
//         if (book[i].name === name && book[i].printing_status != false) {
//             if (book[i].stock == 0) {
//                 status = "stok buku habis"
//                 break
//             } else {
//                 const totalDiscount = book[i].price * (discount / 100)
//                 const priceAfterDiscount = book[i].price - totalDiscount
//                 const totalTax = priceAfterDiscount * (tax / 100)
//                 const priceAfterTax = priceAfterDiscount - totalTax
//                 const totalBuy = priceAfterTax * purchasing
//                 console.group()
//                 console.log("Stock ", book[i].stock)
//                 if(book[i].stock >= purchasing) {
//                     console.log("Book can be purchased with the requested stock")
//                 } else {
//                     console.log("Book cannot purchased with the amount of stock")
//                 }
//                 console.log()
//                 console.log("Original Price ", book[i].price)
//                 console.log("Discount Amount ", totalDiscount)
//                 console.log("Price after discount ", priceAfterDiscount)
//                 console.log("tax amount ", totalTax)
//                 console.log("Price after tax ", priceAfterTax)
//                 console.log("Total Price to pay ", totalBuy)
//                 console.groupEnd()
//                 break
//             }
//         } else {
//             status = "buku tidak tersedia"
//         }
//     }
//     console.log(status)
// }

function purchaseBook(bookName, purchasing) {
    const result = book.find(({ name }) => name === bookName)
    if (result != undefined) {
        const totalDiscount = result.price * (discount / 100)
        const priceAfterDiscount = result.price - totalDiscount
        const totalTax = priceAfterDiscount * (tax / 100)
        const priceAfterTax = priceAfterDiscount - totalTax
        const totalBuy = priceAfterTax * purchasing
        calcCredit(totalBuy)
        console.group()
        console.log("Stock ", result.stock)
        if (result.stock >= purchasing) {
            console.log("Book can be purchased with the requested stock")
            console.log()
            console.log("Original Price ", result.price)
            console.log("Discount Amount ", totalDiscount)
            console.log("Price after discount ", priceAfterDiscount)
            console.log("tax amount ", totalTax)
            console.log("Price after tax ", priceAfterTax)
            console.log("Total Price to pay ", totalBuy)
            console.log()
            console.log("Price to pay with credit due every month ", pricePayPerMonth)
            console.groupEnd()
        } else {
            console.log("Book cannot purchased with the amount of stock")

        }
    }
}

function calcCredit(totalBuy){
    pricePayPerMonth = totalBuy + (totalBuy * (interest/100))
    return pricePayPerMonth
}

// masukkan judul dan stok yang ingin dipesan
purchaseBook("Sword Art Online", 5)