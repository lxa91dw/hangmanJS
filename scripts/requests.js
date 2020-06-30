

const getPuzzle = async (wordCount) => {

    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`, {})
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to fetch the puzzle')
    }
}


const getLocation = async () => {
    const response = await fetch('https://ipinfo.io/json?token=c3790e1246b933', {})
    if (response.status === 200) {
        const data = await response.json()
        return data 
    } else {
        throw new Error('Unable to fetch your location information')
    
    }}


const getCountryDetails = async (countryCode) => {
    const response = await fetch('http://restcountries.eu/rest/v2/all', {})
    if (response.status === 200) {
        const data = await response.json()
        return data
    } else {
        throw new Error('Unable to fetch the puzzle')
    }}
    

//     const request = new XMLHttpRequest()
//     //const countryCode = 'MX'

//     request.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText)
//             resolve(data)
//         } else if (e.target.readyState === 4) {
//             reject('An error has occurred.')
//         }
//     })
    
//     request.open('GET', 'http://restcountries.eu/rest/v2/all')
//     request.send()

// })


// new Promise ((resolve, reject) => {
//     const request = new XMLHttpRequest()

//     request.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText)
//             resolve(data.puzzle)
//         } else if (e.target.readyState === 4) {
//             reject('An error has occurred.')
//         }
//     })
    
//     request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
//     request.send()
    
// })
