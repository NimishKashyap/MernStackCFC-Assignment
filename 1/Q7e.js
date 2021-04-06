let n = 5;

let row = 0;
function fact(n){
    if(n==0)
        return 1;
    return n*fact(n-1);
}
function coeff(n,k){
    return fact(n)/(fact(k)*fact(n-k));
}
while(row<=n){
    let col = 0;
    while(col<=row){
        process.stdout.write(coeff(row,col) + " ");
        col += 1;
    }
    process.stdout.write("\n");
    row += 1;
}