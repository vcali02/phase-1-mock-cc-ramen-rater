// write your code here
//1. GET request to update to the DOM
    //DONE: installed json, used URL to see data in browser

    // The endpoints you may need are:
    // GET /ramens
    // GET /ramens/:id

    let ramensArr

    const ramenMenuDiv = document.querySelector("#ramen-menu")
    const ramenDetailDiv = document.querySelector("#ramen-detail")
    const insertComHere = document.querySelector("#comment-display")
    const insertRatinghere = document.querySelector("#rating-display")
    const detailImg = document.querySelector("#ramen-detail img")
    const ramenName = document.querySelector("#ramen-detail h2")
    const restaurant = document.querySelector("#ramen-detail h3")
    const ramenForm = document.querySelector("#new-ramen")



    function getRamens(){
        fetch(`http://localhost:3000/ramens`)
        .then(response => response.json()) //i promise to then turn the json obj to js obj
        //.then(ramens => ramens.forEach(ramens => ))
        .then(ramen => {
            ramen.forEach(ramenData => 
                renderRamenImg(ramenData))
        })
        .then //(ramen => {
            (ramenData =>
                createNewRamen(ramenData))}
        //)
    //}
   

   //1a. get img on ramenMenuDiv
   //1b. GET all ramen objects
   //1c. DISPLAY each img inside ramenMenuDiv
   
   function renderRamenImg(ramenData){
        const img = document.createElement("img")
        img.setAttribute("src", ramenData.image)
        ramenMenuDiv.appendChild(img)
        


        //2a. click on img in ramenMenuDiv
        //2b. const #ramen-detail
        //2c. const "insert comment here"
        //2d. const "insert rating here"
        //2e. when click, see ALL DETAILS


    img.addEventListener("click", (e) => {
        e.preventDefault()
        detailImg.setAttribute("src", ramenData.image)
        ramenName.textContent = ramenData.name
        restaurant.textContent = ramenData.restaurant
        insertComHere.textContent = ramenData.comment
        insertRatinghere.textContent = ramenData.rating
    })


   }


   const newName = document.querySelector("#new-name")
   const newRestaurant = document.querySelector("#new-restaurant")
   const newImg = document.querySelector("#new-image")
   const newRating = document.querySelector("#new-rating")
   const newComment = document.querySelector("#new-comment")

    //3a. when submit, create new ramen
   //3b. const new-ramen form
   //3c. add new ramen to #ramen-menu div

   function createNewRamen(){
    ramenForm.addEventListener("submit", (e) => {
        e.preventDefault()
        newName.textContent = ""
        newRestaurant.textContent = ""
        newImg.src= "" 
        newComment.textContent= ""
        newRating.textContent= ""
        })
    }
        // getRamens()
    
   

// function postRamen(){
//    fetch("http://localhost:3000/ramens", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(body)
//         }
//    )
//}
   //3a. when submit, create new ramen
   //3b. const new-ramen form
   //3c. add new ramen to #ramen-menu div

    getRamens()
    //postRamen()
//    renderRamenImg()








/* OPTION

const newRamen = {
            name: newName.textContent,
            restaurant: newRestaurant.textContent,
            image: newImg.getAttribute("src"),
            comment: newComment.textContent,
            rating: newRating.textContent
        }
        console.log(newRamen)
        fetch("http://localhost:3000/ramens", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newRamen)
        })
*/