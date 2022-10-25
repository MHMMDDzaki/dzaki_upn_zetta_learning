const book = [
    { name: "Sword Art Online", price: 120000, printing_status: true, stock: 10, purchased: 5 },
    { name: "Harry Potter", price: 140000, printing_status: true, stock: 10, purchased: 5 },
    { name: "Uncharted", price: 110000, printing_status: false, stock: 0, purchased: 0 },
    { name: "Mushoku Tensei", price: 110000, printing_status: true, stock: 0, purchased: 10 }
]

let status = ""
let tax = 10
let discount = 20

function purchaseBook(name,purchasing) {
    for (let i = 0; i < book.length; i++) {
        if (book[i].name === name && book[i].printing_status != false) {
            if (book[i].stock == 0) {
                status = "stok buku habis"
                break
            } else {
                const totalDiscount = book[i].price * (discount / 100)
                const priceAfterDiscount = book[i].price - totalDiscount
                const totalTax = priceAfterDiscount * (tax / 100)
                const priceAfterTax = priceAfterDiscount - totalTax
                console.group()
                console.log("Original Price ", book[i].price)
                console.log("Discount Amount ", totalDiscount)
                console.log("Price after discount ", priceAfterDiscount)
                console.log("tax amount ", totalTax)
                console.log("Price after tax ", priceAfterTax)
                console.log("Stock ", book[i].stock)
                if(book[i].stock >= purchasing) {
                    console.log("Book can be repurchased")
                } else {
                    console.log("Book cannot repurchased")
                }
                console.groupEnd()
                break
            }
        } else {
            status = "buku tidak tersedia"
        }
    }
    console.log(status)
}

// masukkan judul dan stok yang ingin dipesan
purchaseBook("Sword Art Online",11)