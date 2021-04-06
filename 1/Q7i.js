let n = 5;

let row = 0;
let row_mirr = 0;
while(row_mirr < 2 * n - 1){
    let col = n-1;
    let col_mirr = 0;
    while(col_mirr < 2 * n - 1){
        if(col >= n -row-1){
            process.stdout.write((col+1)+" ");
        } else {
            process.stdout.write((n-row) + " ");
        }

        if(col_mirr < n-1){
            col-=1;
        } else {
            col +=1;
        }
        
        col_mirr += 1;
    }
    process.stdout.write("\n");

    if(row_mirr < n-1){
        row += 1;
    } else {
        row -= 1;
    }
    

    row_mirr += 1;
}

