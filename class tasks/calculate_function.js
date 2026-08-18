
function calculate(outerNumber){
    function add(){
        let innerNumber = 3;
        return innerNumber + outerNumber;
    }
    return add();
}

console.log(calculate(4));
