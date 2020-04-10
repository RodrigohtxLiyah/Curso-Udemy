const conti = [];
for (a = 0; a <= 21; a++) {

  conti.push(function() {
    console.log(a);
  });
}

conti[2]();
conti[8]();
conti[3]()