export const cartProducts = state => {
  return state.cart.added.map(({ id, quantity }) => {
    const product = state.products.all.find(p => p.id === id)
    return {
      title: product.title,
      price: product.price,
      quantity
    }
  })
}

// export const cartProducts = state => {
//   return state.cart.added.map(({ id, quantity }) => {
//     const product = state.products.all.find(p => p.id === id)
//     return {
//       title: product.title,
//       price: product.price,
//       quantity
//     }
//   })
// }

// export const count = state => state.count

// const limit = 5

// export const recentHistory = state => {
//   const end = state.history.length
//   const begin = end - limit < 0 ? 0 : end - limit

//   return state.history
//   .slice(begin, end)
//   .toString()
//   .replace(/,/g, ', ')
// }
