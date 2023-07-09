import totalPrice from './totalPrice.js'

console.log('base', totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 })) // 6250
console.log('discount 0, months 10', totalPrice({ price: 100000, discount: 0, isInstallment: true, months: 10 })) // 10000
console.log('discount 10', totalPrice({ price: 100000, discount: 10, isInstallment: true, months: 12 })) // 7500
console.log('months 6', totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 6 })) // 12500
console.log('isInstallment false', totalPrice({ price: 100000, discount: 25, isInstallment: false, months: 12 })) // 75000
console.log('discount 0, isInstallment false', totalPrice({ price: 100000, discount: 0, isInstallment: false, months: 12 })) // 100000
