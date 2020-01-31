function generateP(container, elt) {
    let p = document.createElement('p');
    let content = document.createTextNode(elt.name);
                
    p.appendChild(content);
    container.appendChild(p);
  }

function generateItem(elt) {
    let item = document.createElement('div');
    item.style.backgroundColor = '#' + (function co(lor){   return (lor +=
        [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])
        && (lor.length == 6) ?  lor : co(lor); })('');
    item.style.height = elt.population/10000 + "px";
    item.classList.add = 'stick';
    return item;
  }

function generateP2(container, elt) {
    let p2 = document.createElement('p');
    let content2 = document.createTextNode(elt.population + ' habitants');
    p2.appendChild(content2);
    container.appendChild(p2);
  }

fetch(
        'https://raw.githubusercontent.com/iOiurson/formation-dataviz/master/data/population.json',
      )
        .then(resp => resp.json())
        .then(data => {
            const $container = document.getElementById('chart');
            data.forEach(elt => {
                let container = document.createElement('div');
                generateP(container, elt);
                
                container.classList.add('stick-div');
                let item = generateItem(elt);
                generateP2(container, elt)
                container.appendChild(item);
                $container.appendChild(container);
            });

});
