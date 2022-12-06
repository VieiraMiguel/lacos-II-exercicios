const array = [
    [27, 4, 20, 13, 14],
    [11, 15, 12, 8, 9],
    [5, 5, 12, 16, 4],
    [20, 33, 11, 12, 19],
    [3, 3, 4, 5, 10]
]

/*
for (let j=0; j<array.length; j++){

    console.log(`Jogador ${+(j)+1}: ${array[j]}`)    
}
*/


for (let j in array){
    console.log(`Jogador ${+(j)+1}:`)
    for (let g in array[j]){
        console.log(`Gols na ${+(g)+1}ª temporada: ${array[j][g]}`)
    }
}