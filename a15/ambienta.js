var num = [5, 8, 2, 9, 3  ]

num.push(1)
num.sort()

console.log(num)
console.log(`o vetor tem ${num.length} posiçoes`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(8)
if (pos == -1){
    console.log('o valor nao foi encrotado!')
}else{
    console.log(`o valor esta na posiçao ${pos}`)
}

