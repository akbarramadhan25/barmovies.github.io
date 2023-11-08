// const search = document.querySelector('.my-btn') 
// search.addEventListener('click', function() {
//     const input = document.querySelector('.input-key')
//     fetch('https://www.omdbapi.com/?apikey=a3f11cf&s=' + input.value)
//         .then(response => response.json())
//         .then(response => {
//             const movies = response.Search
//             let films = '';
//             movies.forEach( m => films += showMovies(m)  )

//             const movieContain = document.querySelector('.movie-container')
//             movieContain.innerHTML = films;


//             // when modal on click
//             const modal = document.querySelectorAll('.modal-class')
//             modal.forEach( btn => {
//                 btn.addEventListener('click', function() {
//                     const imdbid = btn.dataset.imdbid
                    
//                     fetch('https://www.omdbapi.com/?apikey=a3f11cf&i=' + imdbid)
//                         .then(response => response.json())
//                         .then( m => {
//                             const movieDetail = showDescMovies(m)
//                             const modalContain = document.querySelector('.modal-body')
//                             modalContain.innerHTML = movieDetail
//                         } )
//                 })
//             } )
           
//         })
// })

const searchButton = document.querySelector('.my-btn')
searchButton.addEventListener('click', async function() {
    try {
        const inputKeyword = document.querySelector('.input-key')
    let movies = await getMoviesData(inputKeyword.value)
    updateUI(movies)
    }
    catch(err) {
       Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.message
       })
           
    }
    
})

function getMoviesData(keyword) {
    return fetch('https://www.omdbapi.com/?apikey=a3f11cf&s=' + keyword)         
        .then(response => {
            if(response.ok === false) {
                throw new Error(response.statusText)
            }
            return response.json()
        })
        .then(response => {
            if ( response.Response === "False" ) {
                throw new Error(response.Error)
            }
            return response.Search;
        })
}
function updateUI(movies) {
    let films = '';
    movies.forEach( m => films += showMovies(m)  )

    const movieContain = document.querySelector('.movie-container')
    movieContain.innerHTML = films;
}

// Event Binding
document.addEventListener('click', async function(e) {
    if( e.target.classList.contains('modal-class') ) {
        const imdbid = e.target.dataset.imdbid
        const moviesDetail = await getMoviesDetail(imdbid)
        updateUIDetail(moviesDetail)
    }
})




function getMoviesDetail(imdbid) {
   return fetch('https://www.omdbapi.com/?apikey=a3f11cf&i=' + imdbid)
            .then(response => response.json())
            .then( m => m )
}

function updateUIDetail(m) {
    const movieDetail = showDescMovies(m)
    const modalContain = document.querySelector('.modal-body')
    modalContain.innerHTML = movieDetail
}  



function showMovies(m) {
    return `<div class="col-md my-3">
                <div class="card">
                    <div class="card-body d-flex flex-column justify-content-center align-items-center">
                        <img src="${m.Poster}">
                        <h5 class="card-title mt-3">${m.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">${m.Year}</h6>
                        <a href="#" class="btn btn-primary mt-3 modal-class" data-bs-toggle="modal" data-bs-target="#exampleModal" data-imdbid="${m.imdbID}" >Go Detail</a>
                    </div>
                </div>
            </div>`
}

function showDescMovies(m) {
    return `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${m.Poster}" class="img-fluid">
                    </div>
                    <div class="col-md">
                        <ul class="list-group">
                            <li class="list-group-item"><h2>${m.Title} (${m.Year})</h2></li>
                            <li class="list-group-item"><strong>Director :  </strong> ${m.Director}</li>
                            <li class="list-group-item"><strong>Released : </strong> ${m.Released}</li>
                            <li class="list-group-item"><strong>Genre : </strong>${m.Genre}</li>
                            <li class="list-group-item"><strong>Actors : </strong>${m.Actors}</li>
                            <li class="list-group-item"><strong>Synopsis : </strong>${m.Plot}</li>
                        </ul>
                    </div>
                </div>
            </div>`
}




