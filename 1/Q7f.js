let n = 5;
let k = n-1;
let i=1;
let j;
while(i<=n){
    j=1;
    while(j<=k){
        process.stdout.write(" ");
        j++;
    }
    k--;
    j=1;
    while(j<=2*i-1)
    {
        process.stdout.write("*");
        j++;
    }
    process.stdout.write("\n");
    i++;
}
k=1;
i=1;
while(i<=n-1){
    j=1;
    while(j<=k){
        process.stdout.write(" ");
        j++;
    }
    k++;
    j=1;
    while(j<=2*(n-i)-1)
    {
        process.stdout.write("*");
        j++;
    }
    process.stdout.write("\n");
    i++;
}

