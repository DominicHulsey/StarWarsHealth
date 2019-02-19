


export default class People {
  constructor(data) {

    this.name = data.name
    this.height = data.height
    this.species = data.species
    this.gender = data.gender
    this.birth_year = data.birth_year
    this.mass = data.mass
    this.vehicles = data.vehicles
    this.bmi = data.bmi
    this.healthStatus = data.healthStatus
  }


  getTemplate() {
    return `<div class="col-3 my-1">
    <div class="card bg-light">
<h5 class="card-title text-center"><u>${this.name}</u></h5>
<h5 class="card-subtitle py-2">Height:<span class="text-primary"> ${this.height}cm.</span></h5>
<h5 class="card-subtitle py-2">weight:<span class="text-primary"> ${this.mass}kgs.</span></h5>
<h5 class="card-text py-2">BMI:<span class="text-success">${this.bmi}</span></h5>
<h5 class="card-text py-2 text-center"><span class="text-info" id="health"><h3>${this.healthStatus}</h3></span></h5>
</div >
      </div > `
  }
}