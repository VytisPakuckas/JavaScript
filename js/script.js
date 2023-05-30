//Sukurti vertinimo sistemą, kuri skaitinį vertinimą paverčia į žodžius:
//1 - Labai blogai
//2 - Blogai
//3 - Vidutiniškai
//4 - Gerai
//5 - Puikiai
//Vertinimą reikia įvesti per prompt. 


let grade = 2
let output = ''

if (grade == 1) {
    output = 'labai blogai'
} else if (grade == 2) {
    output = "blogai"
} else if (grade == 3){
    output = 'vidutiniškai'
} else if (grade == 4){
    output = 'gerai'
} else if (grade == 5){
    output = 'puikiai'
} else {
    output = 'negalima tokio vesti'
}

console.log(output)



