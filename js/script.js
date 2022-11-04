const CARS = [
  {
    name: 'Audi',
    model: 'e-tron GT',
    year: 2022,
    image: './img/e-tron-gt.png'
  },
  {
    name: 'Audi',
    model: 'A4',
    year: 2020,
    image: './img/a4.png'
  },
  {
    name: 'Audi',
    model: 'A5',
    year: 2021,
    image: './img/a5.png'
  },
  {
    name: 'Audi',
    model: 'A6',
    year: 2019,
    image: './img/a6.png'
  },
  {
    name: 'Audi',
    model: 'A7',
    year: 2022,
    image: './img/a7.png'
  }
]

Vue.component('list-cars', {
    props: ['car'],
    template: `<li class="list-group-item list-group-item-action"
      role="button">{{ car.name }} - {{ car.model }}</li>`,
    methods: {
      selectCar: function(index) {
        this.car = CARS[index];
        this.selectedIndexCar = index;
      }
    }
})

Vue.component('list-logs', {
  props: ['log'],
  template: '<li class="list-group-item">{{ log.name }} - {{ log.model }} | Date: {{ log.date }}</li>'
})

let app = new Vue({
  el: '#app',
  data: {
    title: 'Card application',
    cars: CARS,
    car: CARS[0],
    logs: [],
    selectedIndexCar: 0,
    search: '',
    name: '',
    model: '',
    year: null,
    image: '',

  },
  methods: {
    selectCar: function (index) {
      this.car = CARS[index];
      this.selectedIndexCar = index;
    },
    newOrder: function () {
      this.logs.push(
        {
          name: this.car.name,
          model: this.car.model,
          isBought: true,
          date: new Date().toLocaleDateString('uk-UA')
        }
      );
    },
    cancelOrder: function () {
      this.logs.push(
        {
          name: this.car.name,
          model: this.car.model,
          isBought: false,
          date: new Date().toLocaleDateString('uk-UA')
        }
      );
    },
    onSubmit: function() {
      this.cars.push({
        name: this.name,
        model: this.model,
        year: this.year,
        image: this.image,
      })
    },
    onUpdateCar: function() {
      this.car.name = car.name;
      this.car.model = car.model;
      this.car.year = car.year;
      this.car.image = car.image;
    }
  },
  computed: {
    filteredCars() {
      return this.cars.filter(car => {
        return car.name.indexOf(this.search) > -1 || car.model.indexOf(this.search) > -1
      })
    }
  }
});