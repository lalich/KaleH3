
// HTML Intro (tags, content, attributes, semantic HTML)
//4//
// HTML Elements (headers, navigation, lists, sections, etc.) and Media (images, audio, videos)
//3//
// CSS Intro (including css files in HTML, elements)
//3//
// CSS Basics (colors, background, font properties)
//3//


////////////////////////////////
// Easy Going
////////////////////////////////

for (let i = 1; i <=20; i++) 
    console.log(i)


////////////////////////////////
// Get Even
////////////////////////////////
for (let i = 0; i <=200; i++){
    if (i % 2 == 0){
    console.log(i);
    }
}

////////////////////////////////
// Fizz Buzz - Too Date best exercise outcome yet!!!
////////////////////////////////
for (let i = 1; i <=100; i++){
    if (i % 3 == 0 && i % 5 == 0){
        console.log('FizzBuzz ' + i);}
        
        else; if (i % 3 == 0 && i % 5 !== 0)
        console.log('Fizz ' + i);
        
        else; if (i % 5 == 0 && i % 3 !== 0)
        console.log('Buzz ' + i)
        
        else; if (i % 3 !== 0 && i % 5 !== 0)
        console.log(i)

    }
 


////////////////////////////////
// Wild Wild Life -- LFG
////////////////////////////////

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant", 5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"]

plantee.splice(2, 1, 5001);
console.log(plantee)

wolfy.splice(3, 1, 'Gotham City')
wolfy.splice(0, 1, 'Gameboy')
console.log(wolfy)

dart.push( 'Hawkins')
console.log(dart)


////////////////////////////////
// Yell at the Ninja Turtles ...not sure this is inline with the desired outcome but yelling occured I can promise!
////////////////////////////////

const NinjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']
for (let [] of NinjaTurtles);
console.log(NinjaTurtles + ' Cowabunga Dude!')



////////////////////////////////
// Methods, Revisited
////////////////////////////////
// I copied it from the assignment when I could no longer navigate past the usual suspects "the"//

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

console.log(favMovies.indexOf('Titanic'))

favMovies.sort()
console.log(favMovies)

favMovies.pop()
console.log(favMovies)

favMovies.push('Guardians of the Galaxy')
console.log(favMovies)

favMovies.reverse()
console.log(favMovies)

favMovies.shift()
console.log(favMovies)

favMovies.unshift('Guardians of the Galaxy')
console.log(favMovies)

favMovies.splice(favMovies.indexOf('Django Unchained', 1, 'Avatar'))
console.log(favMovies)


const favmovies2 = favMovies.slice(3,8)
console.log(favmovies2)
console.log(favMovies[3])


console.log(favMovies)

console.log(favMovies.indexOf('Fast and Furious'))

// From the class work I do not believe this scenario would call for using 'let'. However I am sure there are plenty of types of algos that would benefit from the usage??? Honestly I look forward to learning this assumptions accuracy!//




////////////////////////////////
// Where is Waldo - I could not find the way@@@!!!//
////////////////////////////////

// const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
//                     ["Lucinda", "Jacc", "Neff", "Snoop"],
//                     ["Petunia", ["Baked Goods", "Waldo"]]];


//                     console.log(whereIsWaldo)


//                     const whereiswaldo2 = whereIsWaldo.splice(1,1)
// console.log(whereiswaldo2)

// console.log(whereIsWaldo)

// console.log(whereIsWaldo.indexOf('Waldo'))

////////////////////////////////
//  Excited Kitten
////////////////////////////////

for (let i = 1; i <=20; i++){
console.log('Love me, pet me! HSSSSSS!')
}

// console.log('Love me, pet me! HSSSSSS!')


// if (i % 2 !== 0);
//     console.log('Love me, pet me! HSSSSSS!')


// else; if (i % 2 == 0){

// console.log(kittytp[Math.random * 3])
//  const kittytp = ['...human... why you taking pictures of me?', 'the catnip made me do it...', '...why does the red dot always get away...' ]

//  let pur = 0
//  kittytp[pur]
//  let puff = 1
//  kittytp[puff]
//  let rDot = 2
//  kittytp[rDot]

// }
// I believe this one is real close but I am having trouble getting it to operate completely.


////////////////////////////////
//  Find the Median
////////////////////////////////

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
nums.sort()
console.log(nums)
console.log(nums[nums.middle])
