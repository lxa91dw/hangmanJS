const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 11) : reject("You didn't provide a number jackass")
    }, 2000)
})

const processData = async () => {
    const data = await getDataPromise(33)
    return data
}


processData().then((data) => {
    console.log('Data:', data)
}).catch((err) => {
    console.log('Error:', err)
})
