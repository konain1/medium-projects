

const apikey = "406a18efe4a35ef4e7cfce407326a99d"
const baseUrl = "https://api.themoviedb.org/3"
const genreUrl = "/genre/movie/list?api_key="
const imagePath = "https://image.tmdb.org/t/p/original/"

const moviesListBaseUrl = "https://api.themoviedb.org/3/movie/"
// const list = "/lists?api_key="


const apiPath = {
    fetchAllCategories:`${baseUrl}${genreUrl}${apikey}`,
    fetchMoviesList:(id)=> `${moviesListBaseUrl}${id}?api_key=${apikey}`
}


function init(){
    fetchAndBuildAllSection()
}   

// function fetchMoviesList(id){
   
//    fetch(`${moviesListBaseUrl}${id}${list}${apikey}`)
//    .then((res=> res.json()))
//    .then((res =>{
   
//     console.log(res.id)

//    }))
//    .catch((err=> console.error(err)))
// }
// fetchMoviesList(99)

function fetchAndBuildAllSection(){
    fetch(apiPath.fetchAllCategories)
    .then((res => res.json()))
    .then((res) => {
        const categories = res.genres
        // console.log(categories)
       
            categories.forEach( category =>{
                // console.log(category)
                fetchaAndbuildMoviesSection(apiPath.fetchMoviesList(category.id),category)
            })
        
        // console.table(movies)
    })
    
    function fetchaAndbuildMoviesSection(fetchUrl,category){
        // console.table(category.name)
        fetch(fetchUrl).then((res => res.json()))
        .then((res =>  {
            // console.table(res)
            const movies = res;
            // console.log(movies)
            
               
              BuildMoviesSection(movies,category.name)
            
        }))
        .catch((err => console.error(err)))
    }
}

function BuildMoviesSection(list,categoryName){
    console.log(list)
    console.log(categoryName)

    const moviesCont = document.getElementById('movies-cont');


    // const MoviesListHTML = list.map(item =>{
    //     return ` <img class=" movie-item" src="${imagePath}${item.backdrop_path} alt=${item.original_title}"`
    // })

    console.log(`${imagePath}${item.backdrop_path}`)

    // const moviesSectionHTML = `
    // <h2 class="movie-section-heading"> <span class="movie-nudge">Explore more</span></h2>
    //  <div class="movies-row">
    //  ${ MoviesListHTML}
    //   </div>
    // `    
    // console.log(moviesSectionHTML)
}

window.addEventListener('load',function(){
    init();
})