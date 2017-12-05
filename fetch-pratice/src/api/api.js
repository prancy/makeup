const API = {
  fetchPopularRepositories: function(language) {
    let URI =`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${language}`
    return (
      fetch(URI, {
        method: 'get'
      })
      .then(response => response.json())
    )
  }
}

export default API