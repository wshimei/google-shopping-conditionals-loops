var data = require('../products.json')

// Write your solutions below
// console.log(data.items)
var items = data.items

// 1.) Go through the items and find all results that have kind of shopping#product. Print the count of these results. Where else is this count information stored in the search results?
// var count = 0
// for (var i = 0; i < items.length; i++) {
//   count += 1
// }
// console.log('there are ' + count + ' shopping#products.')

// 2.) Print the title of all items with a backorder availability in inventories.
// for (var j=0; j< items.length; j++) {
//   var eachItem = items[j]
//   var inventories = eachItem.product.inventories[0]
//   if (inventories.availability === 'backorder') {
//     console.log(eachItem.product.title + ' is available for backorder');
//   }
// }

// 3.) Print the title of all items with more than one image link.
// for (var k = 0; k < items.length; k++) {
//   var eachItem = items[k]
//   if (eachItem.product.images.length > 1) {
//     console.log(eachItem.product.title + ' has more than one image link')
//   }
// }

// 4.) Print all "Canon" products in the items (careful with case sensitivity).
// for (var l = 0; l < items.length; l++) {
//   var eachItem = items[l]
//   if (eachItem.product.brand === 'Canon') {
//     console.log(eachItem)
//   }
// }

// 5.) Print all items that have an author name of "eBay" and are brand "Canon".
// for (var m = 0; m < items.length; m++) {
//   var eachItem = items[m]
//   if (eachItem.product.author.name === 'eBay' && eachItem.product.brand === 'Canon') {
//     console.log(eachItem)
//   }
// }

// 6.) Print all the products with their brand, price, and an image link
for (var n = 0; n < items.length; n++) {
  var eachItem = items[n]
  console.log('Brand:' + eachItem.product.brand + '\n Price: $' + eachItem.product.inventories[0].price + '\n Link: ' + eachItem.product.images[0].link)
}
