// function getTempCallback (location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Cincinnati', function (err, temp) {
//   if (err){
//     console.log('error', err);
//   } else {
//     console.log('success', temp)
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function (){
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('Cincinnati').then(function (temp) {
//   console.log('promise success', temp);
// }, function (err) {
//   console.log('promise error', err)
// })

// if (typeof 7 === 'number'){
//
// }

// Challenge Area

function addPromise(a, b) {
  return new Promise (function (resolve, reject){
    if (typeof a === 'number' && typeof b === 'number'){
      resolve(a+b);
    } else {
      reject('a and b are not both numbers');
    }
  });
}

addPromise(4,3).then(function (temp) {
  console.log('promise success', temp);
}, function (err) {
  console.log('promise error', err);
})

addPromise(4).then(function (temp) {
  console.log('promise success', temp);
}, function (err) {
  console.log('promise error', err);
})
