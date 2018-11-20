fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for (const index in collection) {
        callback(collection[index])
      }
      return collection;
    },

    map: function(collection, callback) {
      newCollection = []
      for (const index in collection) {
        newCollection.push(callback(collection[index]))
      }
      return newCollection;
    },

    reduce: function(collection, callback, acc=0) {
      for (index in collection) {
        acc = callback(acc, collection[index], collection)
        // acc += callback(acc, newCollection[index], newCollection)
      }
      return acc
    },
    
    find: function(collection, predicate) {
      for (index in collection) {
        if (predicate(collection[index])) {
          return collection[index]
        }
      }
    },

    filter: function(collection, predicate) {
      newArray = []
      for (index in collection) {
        if (predicate(collection[index])) {
          newArray.push(collection[index])
        }
      }
      return newArray;
    },

    size: function(collection) {
      let count = 0;
      for (index in collection) {
        count += 1
      }
      return count;
    },

    first: function(array, n=1) {
      if (n===1) {
        return array[0]
      } else {
        return array.slice(0,n)
      }
    },

    last: function(array, n=-1) {
      if (n === -1) {
        return array[ array.length-1 ]
      } else {
        return array.slice(-n)
      }
    }, 

    compact: function(array) {
      crushed = []
      for (index in array) {
        if (!!array[index] == true) {
          crushed.push(array[index])
        }
      }
      return crushed
    }, 

    sortBy: function(array, callback) {
      newRay = array.slice()
      
      newRay.sort(function(a,b) {
        return (callback(a) - callback(b))
      });

      return newRay
    }, 

    flatten: function(array) {
      
    }

  }
})()

fi.libraryMethod()