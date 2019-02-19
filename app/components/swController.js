import StarWarsService from "./swService.js";
import People from "./models/sw.js";


let _swService = new StarWarsService

function drawData() {
  let swInfo = _swService.People
  let template = ''
  swInfo.forEach(sw => {
    if (sw.height != 'unknown' && sw.mass != 'unknown') {
      sw.mass = sw.mass.replace(/,/g, '')
      sw.bmi = Number((((sw.mass * 2.20462 * 703)) / ((sw.height * .39) * (sw.height * .39)))).toFixed(1)
      console.log(sw.bmi)
      function setHealth() {
        if (Number(sw.bmi) < 25) {
          return 'HEALTHY'
        }
        else if (Number(sw.bmi) < 29) {
          return 'OVERWEIGHT'
        }
        else if (Number(sw.bmi) < 39) {
          return 'OBESE'
        }
        else {
          return 'EXTREMELY OBESE'
        }
      }
      sw.healthStatus = setHealth()
      template += sw.getTemplate()
    }
  });
  document.getElementById('swData').innerHTML += template
}
export default class StarWarsController {
  constructor() {
    _swService.addSubscriber('swInfo', drawData)
    _swService.getAllApiPeople()
    _swService.restofPeople()
  }
  getPeople(url) {
    _swService.getAllApiPeople(url)
  }



}