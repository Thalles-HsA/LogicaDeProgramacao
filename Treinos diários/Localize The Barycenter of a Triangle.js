function barTriang(p1, p2, p3){
    
   let cx = (p1[0] + p2 [0] + p3 [0]) / 3
   let cy = (p1[1] + p2 [1] + p3 [1]) / 3

   let arr = [cx.toFixed(4), cy.toFixed(4)]

   return arr
  
  }

console.log(barTriang([4, 6], [12, 4], [10, 10]))