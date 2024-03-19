class HomeController {
  index(req, res) {
    res.json({
      Working: true,
    });
  }
}

export default new HomeController();
