// // let random = () => {
// //   return Math.floor(Math.random() * 11) * 100;
// // };

// let ingredient;

// $(".submitRecipe").click(function(){
//   ingredient = $(".Ingredients").val();
// });

// function letSee(){
  

// let request = new XMLHttpRequest();


// // previous api link that stopped working: currently using Abrar's sample
// // https://api.spoonacular.com/recipes/findByIngredients?apiKey=1fe4c16603534b98934d2702e0e711c4&ingredients=apples,+flour,+sugar&number=2

// // url = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=1fe4c16603534b98934d2702e0e711c4&ingredients=" + ingredient +",+flour,+sugar&number=2";

// Api that we are using
// url = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=1fe4c16603534b98934d2702e0e711c4&ingredients=apples,+flour,+sugar&number=2";
  
// request.open("GET", url, true);

// request.onload = function() {

// let data = JSON.parse(this.response);
// if (request.status >= 200 && request.status < 400) {
// $("#result").text(data.title);

  
// }

// };

// request.send();

// }


  
// //   let counter = 0;
// //   fetch(url)
// //     .then((response) => response.json())
// //     .then((data) => {
// //       for (pokemon of data.results) {
// //         if (counter % 4 == 0) {
// //           row = document.createElement("div");
// //           row.className = "row";
// //           $("#pokeList").append(row);
// //         }
// //         let avatar = document.createElement("div");
// //         avatar.className = "col-3 pokemon";
// //         fetch(pokemon.url)
// //           .then((response) => response.json())
// //           .then((pokemon) => {
// //             let text = document.createElement("h1");
// //             text.textContent = pokemon.name;
// //             let img = document.createElement("img");
// //             img.src = pokemon.sprites.front_default;
// //             avatar.onclick = () => {
// //               img.src = pokemon.sprites.front_shiny;
// //             }
// //             avatar.appendChild(text);
// //             avatar.appendChild(img);
// //             row.appendChild(avatar);
// //             counter++;
// //           });
// //       }
// //     });
// // };

// // main();


// update this
let url = "https://api.spoonacular.com/recipes/random?apiKey=a1dc2f1731664ae1b0fa347c34c67223&tags=vegan";

//let url1 = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=a1dc2f1731664ae1b0fa347c34c67223&ingredients=orange,+flour,+sugar&number=1";


function letSee(){
  // update the ing1/2/3 name
  let ing1 = $(".Ingredient1").val();
  let ing2 = $(".Ingredient2").val();
  let ing3 = $(".Ingredient3").val();
  let temp = Math.floor((Math.random()*3)+1); // Used for showcase - Not needed for original. 

  //let url2 = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=a1dc2f1731664ae1b0fa347c34c67223&ingredients="+ing1+","+ing2+","+ing3+"&number=1; - ORIGINAL

  
  let url2 = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=832e510dd89744d781b5896ecfcc3a56&ingredients="+ing1+","+ing2+","+ing3+"&number="+temp;

  console.log(url2);


  let request = new XMLHttpRequest();

  request.open("GET", url2, true);
  
  request.onload = function() { //Once we recieve the response do this vvvv
  
    let data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
      
      // console.log(data); - Educational Purposes 
      resImg = data[0].image;
      resTitle = data[0].title;
      resId = data[0].id;
      console.log(resId);
      console.log(resTitle);
      $(".result").text(resTitle)
      $('.playerChoice').attr('src',resImg);




      //OPTIONAL EXTENTIAL - BUT SEEMS USEFUL
      let urlN = "https://api.spoonacular.com/recipes/"+resId+"/information?apiKey=a1dc2f1731664ae1b0fa347c34c67223";
      let newRequest = new XMLHttpRequest();
      
      newRequest.open("GET", urlN, true);
      newRequest.onload = function() { //Once we recieve the response do this vvvv

        let newData = JSON.parse(this.response);
        if (newRequest.status >= 200 && newRequest.status < 400) {
          let resIns = newData.instructions;
          console.log(resIns);

          if(resIns == null){
            $(".instro").text("No instructions are available at this time");
          }
          else{
            $(".instro").text(resIns);
          }

  	      
	      }
      };
      newRequest.send();
      

      
      
  
    	//$("#advice").text(data.recipes[0].instructions);
  	}
  };
  
  request.send();
}