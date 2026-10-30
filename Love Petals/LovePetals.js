let sarahTimmy = [5, 6];
console.log(isInLove(sarahTimmy)); // Output: true

function isInLove(petals) {

    if (petals.length === 2) {
        if(petals[0] % 2 !== 0 || petals[1] % 2 === 0) {
            return true;
        }
        else if(petals[0] % 2 === 0 || petals[1] % 2 !== 0) {
            return true;
        }
    }
    return false;
}
//isInLove()


//module.exports = { LovePetals };