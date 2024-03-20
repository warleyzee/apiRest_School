import User from "../models/User";

class UserController {
  async index(req, res) {
    const newUser = await User.create({
      name: 'Warley',
      email: 'warley@mail.com',
      password: '123456',
    });
    res.json(newUser);
  }
}

export default new UserController();
