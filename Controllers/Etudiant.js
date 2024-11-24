const etudiant = require("../Models/Etudiant");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

exports.signUp = async (req, res) => {
    try {
      const { email, password} = req.body;
      const existingetudiant = await etudiant.findOne({ email });
      if (existingetudiant) {
        return res.status(400).send({ msg: "Email already exists!" });
      }
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const newetudiant = new etudiant(req.body);
      newetudiant.password = hashedPassword;
      await newetudiant.save();
      const token = jwt.sign({ _id: newetudiant._id }, process.env.SECRET_KEY, { expiresIn: "1h" });
      res.status(200).send({ msg: "User registered successfully!", newetudiant, token });
    } catch (error) {
      res.status(500).send({ msg: "Error on register", error });
    }
  };

  exports.signIn = async (req, res) => {
    try {
      const { email, password } = req.body;
      const foundetudiant = await etudiant.find({ email });
      if (!foundetudiant[0]) {
        return res.status(400).send({ msg: "Email or password invalid!" });
      } else {
        const checkedPassword = await bcrypt.compare(password, foundetudiant[0].password);
        if (!checkedPassword) {
          return res.status(400).send({ msg: "Email or password invalid!" });
        } else {
          const token = jwt.sign({ _id: foundetudiant[0]._id }, process.env.SECRET_KEY, { expiresIn: "1h" });
          return res.status(200).send({ msg: "signIn successfully", foundetudiant, token });
        }
      }
    } catch (error) {
      res.status(500).send({ msg: "Error on signIn", error});
    }
  };

  exports.deleteetudiant = async (req, res) => {
    try {
      const { _id } = req.params;
      await etudiant.deleteOne({ _id });
      res.status(200).send({ msg: "User deleted successfully!" });
    } catch (error) {
      res.status(500).send({ msg: "Error deleting user", error });
    }
  };
  
  exports.resetPassword = async (req, res) => {
    try {
      const { _id } = req.params;
      const { newPassword } = req.body;
      if (!newPassword) {
        return res.status(400).send({ msg: "New password is required!" });
      }
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(newPassword, salt);
      await etudiant.updateOne({ _id }, { $set: { password: hashedPassword }});
      res.status(200).send({ msg: "Password updated successfully!" });
    } catch (error) {
      res.status(500).send({ msg: "Error on updating password", error });
    }
  };

  exports.resetUserName = async (req, res) => {
    try {
      const { _id } = req.params;
      const { userName } = req.body;
      if (!userName) {
        return res.status(400).send({ msg: "New userName is required!" });
      }
      await etudiant.updateOne({ _id }, { $set: { userName: userName }});
      res.status(200).send({ msg: "userName updated successfully!" });
    } catch (error) {
      res.status(500).send({ msg: "Error on updating userName", error });
    }
  };