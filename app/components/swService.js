import People from "./models/sw.js"

let _state = {
  swInfo: [],
  bmi: ''
}

let _subscribers = {
  swInfo: [],
  bmi: ''
}

let _dataApi = axios.create({
  baseURL: 'https://swapi.co/api/people'
})

function setState(prop, value) {
  _state[prop] = value
  _subscribers[prop].forEach(fn => fn())
}


export default class StarWarsService {
  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }

  get People() {
    return _state.swInfo.map(sw => new People(sw))
  }

  getAllApiPeople(url = '') {
    _dataApi.get(url)
      .then(response => {
        let swInfo = response.data.results.map(sw => new People(sw))
        setState('swInfo', swInfo)
      })
  }

  restofPeople() {
    for (let i = 9; i > 1; i--) {
      let url = 'https://swapi.co/api/people/?page=' + i
      let add = this.getAllApiPeople(url)
    }
  }
}