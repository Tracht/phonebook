function sortAtoZ (users, fieldName) {
    return users.sort(function (a, b) {
      var nameA = a[fieldName].toLowerCase();
      var nameB = b[fieldName].toLowerCase();
      
      if (nameA < nameB) //sort string ascending
        return -1
      if (nameA > nameB)
        return 1
      return 0 //default return value (no sorting)
    })
  }

  export { sortAtoZ };