import Student from "../models/Student";

class HomeController {
  async index(req, res) {
    const newStudent = await Student.create({
      name: 'Warley',
      sunname: 'Souza',
      email: 'warley@mail.com',
      age: 32,
      weight: 106.3,
      height: 1.81,
    });
    res.json(newStudent);
  }
}

export default new HomeController();
