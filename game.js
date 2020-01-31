



let player =
{
    name:"",
    health: 100,
    damage: 0,
    hits: 0,
    inventory: []
}

let items = {
    mace: {
        name: 'mace',
        modifier: 10,
        description: "Eyes burn!"
    },
    sledgehammer: {
        name: 'sledgehammer',
        modifier: 15,
        description: "You toast!"
    },
    switchblade: {
        name: 'switchblade',
        modifier: 20,
        description: "You're sliced and diced!"

    }

}

let initHealthScore = player.health;
console.log(initHealthScore);
let totalCounterMeasures = 0;

document.getElementById('current-health').value = player.health;

document.getElementById('current-hits').value = player.hits;

function slap() {
    console.log("In slap");
    player.damage++;
    player.hits++;
    //alert(`Health is now ${health}`);
    update();
}

function punch() {
    console.log("In punch");
    player.damage += 5;
    player.hits++;
    //alert(`Health is now ${health}`);
    update();
}

function kick() {
    console.log("In kick");
    player.damage += 10;
    player.hits++;
    //alert(`Health is now ${health}`);
    update();
}

function addCounterMeasures(weapon) {


    console.log('Inside add items');


    //items[weapon] finds item with key of 'weapon'
    player.inventory.push(items[weapon]);
    console.log(player.inventory);




    let total = player.inventory.map(item => item.modifier).reduce((x, y) => (x + y));


    totalCounterMeasures = total;
    console.log(totalCounterMeasures);
    update();


}



function update() {
    console.log("In update")
    console.log(totalCounterMeasures);

    player.health = initHealthScore -  player.damage + totalCounterMeasures;

    document.getElementById('current-health').value = player.health;

    document.getElementById('current-hits').value = player.hits;



}

