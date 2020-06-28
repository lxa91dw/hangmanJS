const getPuzzle = (wordCount, callback) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            callback(undefined, data.puzzle)
        } else if (e.target.readyState === 4) {
            callback('An error has occurred.', undefined)
        }
    })
    
    request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    request.send()
    
}

const getCountryDetails = (countryCode, callback) => {
    const request = new XMLHttpRequest()
    //const countryCode = 'MX'

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            callback(undefined, data)
        } else if (e.target.readyState === 4) {
            callback('An error has occurred.', undefined)
        }
    })
    
    request.open('GET', 'http://restcountries.eu/rest/v2/all')
    request.send()

}