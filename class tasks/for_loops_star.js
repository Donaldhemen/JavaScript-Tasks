
for (let row = 1; row < 6; row++){
    for(let column = 6; column > row; column--){
        process.stdout.write(" ");
    }
    
    for(let column = 0; column < row; column++){
        process.stdout.write("*");
    }
    for(let column = 1; column < row; column++){
        process.stdout.write("*");
    }
    
    console.log("");
    
}

for (let row = 1; row < 5; row++){
    for(let column = -1; column < row; column++){
        process.stdout.write(" ");
    }
    
    for(let column = 5; column > row; column--){
        process.stdout.write("*");
    }
    for(let column = 4; column > row; column--){
        process.stdout.write("*");
    }
    
    console.log("");
    
}
