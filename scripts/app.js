
// each letter press cues this event
window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    if (hangman1.status === 'Playing') {
        hangman1.makeGuess(guess)
        guessesP.textContent = `Guessed Letters:  ${hangman1.guessedLetters.sort()}`
        // puzzleP.textContent = hangman1.puzzle
        puzzleP.innerHTML = ''
        hangman1.puzzle.split('').forEach((letter) => {
            const letterEl = document.createElement('span')
            letterEl.textContent = letter
            puzzleP.appendChild(letterEl)
        })
        remGuessesP.textContent = `Remaining guesses: ${hangman1.remainingGuesses}`
        hangmanImg.src = imageList[hangman1.remainingGuesses]
        statusP.textContent = `Game Status: ${hangman1.statusMessage}`
    }
})
const setWinningImage = () => {
    hangmanImg.src = imageList[8]
}

const setLosingImage = () => {
    hangmanImg.src = imageList[9]
}

const hangmanDiv = document.querySelector("#hangmanMain")
const puzzleP = document.querySelector("#puzzle")
const gameTypeP = document.querySelector("#gameType")
const guessesP = document.querySelector("#guesses")
const remGuessesP = document.querySelector("#remainingGuesses")
const statusP = document.querySelector("#gameStatus")
const hangmanImg = document.querySelector("#hangmanImage")
let hangman1 = undefined

const clearGame = (puzzleType, puzzle) => {
    gameTypeP.textContent = puzzleType
    hangmanImg.src = imageList[hangman1.remainingGuesses]
    remGuessesP.textContent = `Remaining guesses: ${hangman1.remainingGuesses}`
    puzzleP.innerHTML = ''
    hangman1.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleP.appendChild(letterEl)
    })

    statusP.textContent = `Game Status: New Game`
    guessesP.textContent = 'Guessed Letters: '
}

const startRandomGame = async () => {
    const puzzle = await getPuzzle('3')
    hangman1 = new Hangman(puzzle, 7)
    clearGame('Game Type: Random 3 Word Puzzle', hangman1.puzzle)
}

const startLakeGame = () => {
    const whichWord = Math.floor(Math.random() * wordList.length)
    hangman1 = new Hangman(wordList[whichWord], 7)
    clearGame('Game Type: Random Lake Related Puzzle', hangman1.puzzle)
}


document.querySelector('#resetRandom').addEventListener('click', startRandomGame)

document.querySelector('#resetLake').addEventListener('click', startLakeGame)

startLakeGame();

let countryCode = "US"
let countryName = ''
getLocation().then((data) => {
    console.log(`You are located in or near city ${data.city} in ${data.region} in country ${data.country}`)
    countryCode = data.country
    return getCountryDetails(countryCode)
}).then((data) => {
        const country = data.find((country) => country.alpha2Code === countryCode)
        console.log(`The Country name is ${country.name}`)
        console.log(`${country.name} borders  ${country.borders}`)
        countryName = country.name
        // console.log(country)

        // list all border countries
        // console.log(`${countryName} borders the following countries:`)
        country.borders.forEach(element => {
            const borderCountry = data.find((country) => country.alpha3Code === element)
            console.log(`. . . ${borderCountry.name}(${borderCountry.alpha3Code}) borders ${borderCountry.borders}`)
            });

        //list all region countries
        // get region from data
        const regionCode = country.region

        // find in data all countries with same region
        const regionCountries = data.filter(country => country.region === regionCode)
        
        console.log('. . . . . . . . . . . . . . . . . . . . . . . . . . . ')

        // print country name
        console.log(`List of countries in region ${regionCode}:`)
        regionCountries.forEach((element) => {
            console.log(element.name)
        });

            console.log('. . . . . . . . . . . . . . . . . . . . . . . . . . . ')


}, (err) => {
            console.log(`There was an error: "${err}"`)
        }
);

