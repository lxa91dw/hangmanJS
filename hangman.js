// new change
const wordList = ['lemonade', 'new jersey', 'javascript', 
'cheerleading', 'lake hopatcong', 'This is my new Hangman game', 
'telescope', 'rainy days', 'flowers', 'tranquility', 'philadelphia',
'laptop', 'pitbull terrier', 'jefferson', 'life is awesome', 
'summertime', 'vacation', 'jetski', 'lake life is good' ]

class Hangman {
    constructor (word, guesses) {
        this.word= word.toLowerCase().split(''),
        this.remainingGuesses = guesses 
        this.guessedLetters = []
        this.status = 'Playing'
}

get statusMessage() {
    // failed if remaining guesses is < 1
    this.status = 'calculating'
    let finished = true

    if (this.remainingGuesses < 1) {
        this.status = `Failed. Nice try, the word was "${this.word.join('')}"`
    } else {
        this.word.forEach((letter) => {
        // Finished if all letters in word are shown
        if (this.guessedLetters.includes(letter.toLowerCase()) || letter === ' ') {
                
        // otherwise, you are still in the game
        } else {
                finished = false
        }        
        }) 
        if (finished === true) {
            this.status = 'Finished, you are a winner!'
        } else {
            this.status = 'Playing'
        }
    }
    return this.status

}


get puzzle() {
    let puzzle = ''

    this.word.forEach((letter) => {
     if (this.guessedLetters.includes(letter.toLowerCase()) || letter === ' ') {
        puzzle += letter 
    } else {
        puzzle += '-'
    }        
    })

    return puzzle
}

makeGuess(letter) {
    if (!this.guessedLetters.includes(letter.toLowerCase())) {
        this.guessedLetters.push(letter.toLowerCase())
        if (this.word.includes(letter.toLowerCase())) {
            this.puzzle
        } else {
            this.remainingGuesses--
        }   
    }
  }
}
