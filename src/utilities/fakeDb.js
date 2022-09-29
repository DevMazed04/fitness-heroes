// const addToLS = (id) => {
//    const quantity = localStorage.getItem(id);
//    if (quantity) {
//       const newQty = parseInt(quantity) + 1;
//       localStorage.setItem(id, newQty)
//    }
//    else {
//       localStorage.setItem(id, 1);
//    }
// }

const addToLS = (key, value) => {

   localStorage.setItem(key, value);
}

export {
   addToLS,
}
