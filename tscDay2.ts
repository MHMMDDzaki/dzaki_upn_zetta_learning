function random2(a: (string | number)[]){
    return console.log(a.join(' '))

}

random2(['1','data','3','result'])
random2(['Bejo','has','4','sport','car'])

// When to use array,tuple,and object ?
// Array digunakan ketika kita ingin menambahkan item didalamnya
// tuple sama dengan array tetapi ditambahkan limitasi data yang bisa tersimpan
// object digunakan ketika data yang diinputkan ingin memiliki nama untuk tiap datanya

type Custom = (string | number)[];

function random3(pt: Custom) {
    return console.log(pt)
}

random3(["A",1,3])

