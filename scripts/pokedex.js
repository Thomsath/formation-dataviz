console.log("Gotta catch'em all !");
window.addEventListener("DOMContentLoaded", (event) => {
  
  function isInArray(types, elt) {
    !types[elt['Type 1']] ? types[elt['Type 1']] = [] : types;
    elt['Type 2'] !== "None" && !types[elt['Type 2']] ? types[elt['Type 2']] = [] : types;
    types[elt['Type 1']].push(elt);
    elt['Type 2'] !== "None" && types[elt['Type 2']].push(elt);
  }
  
  function createStick(key, types) {
    let stick = document.createElement('div');
    stick.style.height = types[key][1].length + 'px';
    stick.classList.add('stick');
    return stick;
  }

  function createName(key, types) {
    let text = document.createElement('p');
    let content = document.createTextNode(types[key][0]);
    text.append(content);
    return text;
  }

  function createNbPokemons(key, types) {
    let text = document.createElement('p');
    let content = document.createTextNode(types[key][1].length);
    text.append(content);
    return text;
  }

  fetch(
    'https://raw.githubusercontent.com/iOiurson/formation-dataviz/master/data/pokedex.json',
  )
    .then(resp => resp.json())
    .then(data => {
      let types = {};
      let $container = document.getElementById('chart');
      data.forEach(elt => {
        isInArray(types, elt);
      });
      // Object triés
      var entries = Object.entries(types);
      entries.sort((a, b) => { return a[1].length - b[1].length; });

      for (var key in entries) {
        let stick = createStick(key, entries);
        let text = createName(key, entries);
        let nbPokemons = createNbPokemons(key, entries);
        stick.append(nbPokemons);
        stick.append(text);
        $container.append(stick);
      }
    });
});
