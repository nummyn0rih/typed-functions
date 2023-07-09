import totalPrice from './totalPrice.js'

const test = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 })

console.log(test)   // 6250