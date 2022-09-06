let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

  let contains = (city, array) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === city) {
        return true;
      }
    }
    return false;
  }


console.log(contains('Belfast', destinations));



