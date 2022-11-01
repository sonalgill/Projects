const userModel = require("../models/userModel")
const jwt = require("jsonwebtoken")


module.exports = {
  createUser: async (req, res) => {
    try {

      req.body.name = req.body.name.replace(/\s+/g, " ")
      let userData = await userModel.create(req.body)
      res.status(201).send({
        status: true,
        message: "Success",
        data: userData
      });
    } catch (error) {
      res.status(500).send({ status: false, error: error.message })
    }
  },

  loginUser: async function (req, res) {
    try {
      //Email And Password (Present?/Not)
      let checkEmaillAndPassword = await userModel.findOne({
        email: req.body.email,
        password: req.body.password,
      })
      //bcz findOne Returns Null(If no Doc Found)
      if (checkEmaillAndPassword == null) {
        return res.status(404).send({
          status: false,
          msg: "this email and password are not register in Our Database",
        })
      }
      //

      let token = jwt.sign(
        { userId: checkEmaillAndPassword._id },
        "Group-27-Secret-Key",
        {
          expiresIn: "1d",
        }
      );

      //Verifing Token
      let decode = jwt.verify(token, "Group-27-Secret-Key")
      res.status(201).send({
        status: true,
        data: token,
        tokenDetails: decode
      })
    } catch (err) {
      return res.status(500).send({
        msg: false, errMessage: err.message,
      })
    }
  }
}
