(function() {
  axios({
    url: 'api/'
  })
  .then(function(r) {
    console.log('test' + r);
  });
}();