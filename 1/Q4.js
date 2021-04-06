let start = 2;
let i=1;
let printable = start;
while(i<10){
    process.stdout.write(printable + " ");
    printable += 4*i;
    i++;
}