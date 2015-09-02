module.exports = function(factory){
  factory.define("detail")
    .attr("text", "Test text - ", {auto_increment: 10})
    .attr("icon", "Test icon - ", {auto_increment: 2});
  //  .attr("username": "Test Username")
  //  .attr("email": "test@example.com");
};
