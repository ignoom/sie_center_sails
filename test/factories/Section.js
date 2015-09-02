module.exports = function(factory){
  factory.define("section")
    .attr("subtitle", "Test Username - ", {auto_increment: 5})
    .attr("text", "test@example.com")
    .attr("icon", "test icon")
    .attr("bullets", ["bullet", "bullet"])
    .attr("img", "test.jpg");
    //.attr("post":1); // Post has to be related to a post id
};
