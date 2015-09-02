module.exports = function(factory){
  factory.define("user")
    .attr("username", "Test Username")
    .attr("email", "test@example.com");
};
