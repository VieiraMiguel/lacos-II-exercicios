const num = prompt("Insira um número para obter sua tabuada")

const mult = [1,"b",3,"z",5,6,7,8,9,10]


console.log("Tabuada de", num)

for(m in mult){
    console.log(`${num}x${+(m)+1}= ${num*(+(m)+1)}`)
}