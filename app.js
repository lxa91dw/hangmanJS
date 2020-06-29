
// new change
window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    if (hangman1.status === 'Playing') {
        hangman1.makeGuess(guess)
        guessesP.textContent = ` ${hangman1.guessedLetters.sort()}`
        puzzleP.textContent = hangman1.puzzle
        remGuessesP.textContent = `Remaining guesses: ${hangman1.remainingGuesses}`
        statusP.textContent = `Game Status: ${hangman1.statusMessage}`
    }
})

const whichWord = Math.floor(Math.random() * wordList.length)
hangman1 = new Hangman(wordList[whichWord], 7)
const hangmanDiv = document.querySelector("#hangmanMain")
const puzzleP = document.querySelector("#puzzle")
const guessesP = document.querySelector("#guesses")
const remGuessesP = document.querySelector("#remainingGuesses")
const statusP = document.querySelector("#gameStatus")
puzzleP.textContent = hangman1.puzzle

// making an HTTP request
getPuzzle("3", (error, puzzle) => {
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(puzzle)
    }
})

const countryCode = "DE"
let countryName = ''

getCountryDetails(countryCode, (error, data) => {
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        const country = data.find((country) => country.alpha2Code === countryCode)
        console.log(`The Country name is ${country.name}`)
        console.log(`${country.name} borders  ${country.borders}`)
        countryName = country.name
        console.log(country)
        country.borders.forEach(element => {
            const borderCountry = data.find((country) => country.alpha3Code === element)
            console.log(`${countryName} borders ${borderCountry.name}`)
            console.log(`. . . ${borderCountry.name}(${borderCountry.alpha3Code}) borders ${borderCountry.borders}`)
            });
        }});

