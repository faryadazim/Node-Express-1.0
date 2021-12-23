var post = require("./imageModel"); //import schema

module.exports.addData = async (req, res) => {
  try {
    // Checking user input

    if (!req.body.title) {
      res.json({ status: 400, message: "title not found" });
      return;
    } else if (!req.body.desc) {
      res.json({ status: 400, message: "Desc not found" });
      return;
    } else if (!req.body.name) {
      res.json({ status: 400, message: "name not found" });
      return;
    }
    // Adding Data to clouds
    const { title, desc, name } = req.body;
    var addPost = new post({
      title,
      desc,
      name,
    });
    addPost.save((err, success) => {
      if (err) {
        res.json({ status: 400, message: err });
        return;
      }
      res.json({ status: 200, message: "Success", data: success });
    });
  } catch (error) {
    res.json({ status: 400, message: err });
    return;
  }
};
