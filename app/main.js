import StarWarsController from "./components/swController.js"


class App {
  constructor() {
    this.controllers = {
      swController: new StarWarsController()
    }
  }
}


window['app'] = new App()