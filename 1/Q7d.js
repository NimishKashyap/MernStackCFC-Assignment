let n=5;

let row = 0;
while(row<n){
    let col_mirr = 0;
    let col = 0;
    while(col_mirr<2*n-1){
        if(col<n-row-1){
            process.stdout.write(" ");
        } else{
            process.stdout.write((row + col+1 - (n-row-1))+"");
        }
        if(col_mirr<n-1){
            col+=1;
        }else{
            col-=1;
        }
        col_mirr++;
    }
    process.stdout.write("\n");
    row++;
}