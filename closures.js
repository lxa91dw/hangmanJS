
const tipper = (tipPct) => {
    return (amount) => {
        return amount * tipPct
    }
}

tip15Pct = tipper(0.15)
tip20Pct = tipper(0.20)
tip25Pct = tipper(0.25)
amount = 225.00

console.log(`15% tip on $${amount} is $${tip15Pct(amount)}`)
console.log(`20% tip on $${amount} is $${tip20Pct(amount)}`)
console.log(`25% tip on $${amount} is $${tip25Pct(amount)}`)
