const fs = require('fs');

const count = Number(process.argv[2]); // odczyt liczby obiektów
let names = [];                        // tablica z obiektami 
//losowanie daty urodzenia oczu
const getRandomBirthDate = () => {
    const startDate = new Date(1995, 1, 1);
    const endDate = new Date(2005, 1, 1);
    const date = new Date(startDate.getTime() + Math.random() * (endDate - startDate));
    return date.toISOString().split('T')[0];
}
//losowanie koloru oczu
const getRandomEyeColour = () => {
    const colours = ['brown', 'blue', 'green'];
    return colours[Math.floor(Math.random() * colours.length)];
}
//losowanie ratingu
const getRandomRating = () => {
    return rating = Math.floor(Math.random()*10) + 1
}

fs.readFile('./names.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    //losowanie daty
    //podział łańcucha z imionami na wiersze.
    names = data.split("\n").map(s => s.trim()).filter(n => n.length != 0);
    console.log(names);
    let content = "export const data = [";
    for(let i = 0; i < count; i++){
        //losowanie imienia z bilioteki imion
        const name = `"${names[~~((Math.random() * names.length) / 1)]}",`;


        const person = {
            id: i + 1,
            name: name.substring(1, name.length -2),
            birth: getRandomBirthDate(),
            eyes: getRandomEyeColour(),
            rating: getRandomRating()
        };
        content += ` ${JSON.stringify(person)},\n`;
    }
    content += "];\n"


    //zapis łańcucha do pliku 
    fs.writeFile('./src/data/module-data.js', content, (err) => {
        if (err) {
           console.error(err);
        }
        console.log("module-data.js generated");
       });
});