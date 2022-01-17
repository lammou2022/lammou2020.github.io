var records = [
    { id:0, username: 'sa',  password: '0',   displayName: 'SA',       emails: [ { value: 'sp@mail.mbc.edu.mo' } ] }
  , { id: 1, username: 't0',   password: '123', displayName: 'teacherA', emails: [ { value: 'test@mail.mbc.edu.mo' } ] }   
  , { id: 10, username: 'st1', password: '123', displayName: 'StudentC', emails: [ { value: 'test@mail.mbc.edu.mo' } ] }   
];


exports.findById = function(id, cb) {
  process.nextTick(function() {
    let found=false;
    for(let i=0;i<records.length;i++){
      if (records[i].id==id) {
        cb(null, records[i]);
        found=true;
        break;
      } 
    }
    if(!found) {
      cb(new Error('User ' + id + ' does not exist'));
    }
    /*
    var idx = id - 1;
    if (records[idx]) {
      cb(null, records[idx]);
    } else {
      cb(new Error('User ' + id + ' does not exist'));
    }
    */
  });
}

exports.findByUsername = function(username, cb) {
  process.nextTick(function() {
    for (var i = 0, len = records.length; i < len; i++) {
      var record = records[i];
      if (record.username === username) {
        return cb(null, record);
      }
    }
    return cb(null, null);
  });
}