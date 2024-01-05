//인기영화 API
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTA1MDRiOTgyNTQyYjZmODkxNGViNGFlOTkwY2QzOCIsInN1YiI6IjY1OTY2ZGQ3ODY5ZTc1NmUzYTA2YWUwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UWagrVhcGvx1NtgmximqmprghpZeG2tBjvcosz7SaDU',
  },
};
//url
const url =
  'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ko-KO&page=1&sort_by=popularity.desc';

function showMovies() {
  fetch(url, options)
    .then((response) => response.json())
    .then((response) => moviesApi(response.results))
    .catch((err) => console.error(err));
}

showMovies();

function moviesApi(response) {
  for (let i = 0; i < response.length; i++) {
    const cardList = document.getElementById('main-card');
    let movieTitle = response[i]['title'];
    let movieOverview = response[i]['overview'];
    let posterPath = response[i]['poster_path'];
    let voteAverage = response[i]['vote_average'];
    let id = response[i]['id'];

    let temp_hteml = `<div class="col" >
    <a href = "#"><div class="card h-100" onclick="alert('ID 주소는: ${id} 입니다.')">
    <img src="https://image.tmdb.org/t/p/w500${posterPath}"> 
    <div class="card-body">
    <h5 class="card-title" >${movieTitle}</h5>
    <p class="card-text" >${movieOverview}</p>
    <p class="card-average" >${voteAverage}</p>
      </div>
    </div>
    </a> 
  </div>
`;

    cardList.insertAdjacentHTML('beforeend', temp_hteml);
  }
}
