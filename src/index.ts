import totalPrice from './totalPrice.js'
import normalizeData from './normalizeData.js'
import getData from './getData.js'
import { posts } from './data.js'

console.log('tests totalPrice')
console.log('base', totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 })) // 6250
console.log('discount 0, months 10', totalPrice({ price: 100000, discount: 0, isInstallment: true, months: 10 })) // 10000
console.log('discount 10', totalPrice({ price: 100000, discount: 10, isInstallment: true, months: 12 })) // 7500
console.log('months 6', totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 6 })) // 12500
console.log('isInstallment false', totalPrice({ price: 100000, discount: 25, isInstallment: false, months: 12 })) // 75000
console.log('discount 0, isInstallment false', totalPrice({ price: 100000, discount: 0, isInstallment: false, months: 12 })) // 100000

console.log(' ')
console.log('test normalizeData')
console.log(normalizeData(posts))

console.log(' ')
console.log('test getData')
const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments'
console.log(await getData(COMMENTS_URL))
