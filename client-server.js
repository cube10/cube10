require('express')().use(require('express')
  .static(__dirname + '/dev/build')).listen(8080, () => console.log('client up on 8080'));
