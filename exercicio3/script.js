const maioresPs = ["Rússia", "Canadá", "China", "EUA", "Brasil"]

console.log("Ranking dos maiores países:")

for(let p of maioresPs){

    console.log(`${maioresPs.indexOf(p)+1}º: ${p}`)
}