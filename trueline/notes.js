function atmNotes() {
    
    let nt2000 = 0, nt500 = 0, nt200 = 0, nt100 = 0, nt50 = 0, nt20 = 0, nt10 = 0, nt5 = 0, nt2 = 0, nt1 = 0;

    let amt = 2354;

    console.log("Entered the amount :" + amt);

   if (amt >= 2000) {
        nt2000 = Math.floor(amt / 2000);
        amt -= nt2000 * 2000;
        console.log("2000:" + nt2000);
    }
    if (amt >= 500) {
        nt500 = Math.floor(amt / 500);
        amt -= nt500 * 500;
        console.log("500:" + nt500);
    }
    if (amt >= 200) {
        nt200 = Math.floor(amt / 200);
        amt -= nt200 * 200;
        console.log("200:" + nt200);
    }
    if (amt >= 100) {
        nt100 = Math.floor(amt / 100);
        amt -= nt100 * 100;
        console.log("100:" + nt100);
    }
    if (amt >= 50) {
        nt50 = Math.floor(amt / 50);
        amt -= nt50 * 50;
        console.log("50:" + nt50);
    }
    if (amt >= 20) {
        nt20 = Math.floor(amt / 20);
        amt -= nt20 * 20;
        console.log("20:" + nt20);
    }
    if (amt >= 10) {
        nt10 = Math.floor(amt / 10);
        amt -= nt10 * 10;
        console.log("10:" + nt10);
    }
    if (amt >= 5) {
        nt5 = Math.floor(amt / 5);
        amt -= nt5 * 5;
        console.log("5:" + nt5);
    }
    if (amt >= 2) {
        nt2 = Math.floor(amt / 2);
        amt -= nt2 * 2;
        console.log("2:" + nt2);
    }
    if (amt >= 1) {
        nt1 = amt;
        console.log("1:" + nt1);
    }
}