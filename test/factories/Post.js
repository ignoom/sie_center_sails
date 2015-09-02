module.exports = function(factory){
  factory.define("post")
    .attr("title", "Test title - ", {auto_increment: true})
    .attr("footer", "Footer - ", {auto_increment: true})
    .attr("type", "Test");
  //  .attr("username": "Test Username")
  //  .attr("email": "test@example.com");
};
