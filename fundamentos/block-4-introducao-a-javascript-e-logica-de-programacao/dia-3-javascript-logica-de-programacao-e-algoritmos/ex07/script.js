// Agora inverta o lado do triângulo. Por exemplo:
// n = 5
//     *
//    **
//   ***
//  ****
// *****

let n = 5;
let drawn = '';

for (let cont = n; cont >= 0; cont -= 1){
  for (let cont2 = 0; cont2 < n; cont2 += 1){
    if (cont2 >= cont){
      drawn += '*';
    } else {
      drawn += ' ';
    };
  };

  console.log(drawn);

  drawn = '';
};
