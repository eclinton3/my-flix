Vue.use(VueRouter);

const movies = {
    "lone-survivor": {
        "id": 'lone-survivor',
        "title": "Lone Survivor",
        "subtitle": "Survivor",
        "description": `Marcus Luttrell and his team set out on a mission to capture or kill notorious Taliban leader Ahmad Shah, in late June 2005. Marcus and his team are left to fight for their lives in one of the most valiant efforts of modern warfare.`,
        "largeImgSrc": `url('https://image.tmdb.org/t/p/w780/pjuq4N7tKsJPofRXDxxiLBka6po.jpg')`,
        "smallImgSrc": 'https://image.tmdb.org/t/p/w185/pjuq4N7tKsJPofRXDxxiLBka6po.jpg',
        "releaseDate": 'January 10 2014',
        "duration": '2hr 1min',
        "genre": 'Action, Drama, Biography',
        "trailerPath": 'https://www.youtube.com/embed/yoLFk4JK_RM',
        "favorite": false
    },
    "interstellar": {
        "id": 'interstellar',
        "title": "Interstellar",
        "subtitle": "Interstellar",
        "description": `Interstellar chronicles the adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.`,
        "largeImgSrc": `url('https://image.tmdb.org/t/p/w780/xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg')`,
        "smallImgSrc": 'https://image.tmdb.org/t/p/w185/xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg',
        "releaseDate": 'November 7 2014',
        "duration": '2hr 49min',
        "genre": 'Adventure, Drama',
        "trailerPath": 'https://www.youtube.com/embed/zSWdZVtXT7E',
        "favorite": false
    },
    "hacksaw-ridge": {
        "id": 'hacksaw-ridge',
        "title": "Hacksaw Ridge",
        "subtitle": "Hacksaw",
        "description": `WWII American Army Medic Desmond T. Doss, who served during the Battle of Okinawa, refuses to kill people, and becomes the first man in American history to receive the Medal of Honor without firing a shot.`,
        "smallImgSrc": 'https://image.tmdb.org/t/p/w185/pN9qGW2zWKKwLx6OFh9ylpk6YER.jpg',
        "largeImgSrc": `url('https://image.tmdb.org/t/p/w780/pN9qGW2zWKKwLx6OFh9ylpk6YER.jpg')`,
        "releaseDate": 'November 4 2016',
        "duration": '2hr 19min',
        "genre": 'Biography, Drama, History',
        "trailerPath": 'https://www.youtube.com/embed/s2-1hz1juBI',
        "favorite": false
    },
    "inception": {
        "id": 'inception',
        "title": "Inception",
        "subtitle": "Inception",
        "description": `Cobb, a skilled thief is offered a chance to regain his old life as payment for a task considered to be impossible: \"inception\", the implantation of another person's idea into a target's subconscious.`,
        "smallImgSrc": 'https://image.tmdb.org/t/p/w185/s2bT29y0ngXxxu2IA8AOzzXTRhd.jpg',
        "largeImgSrc": `url('https://image.tmdb.org/t/p/w780/s2bT29y0ngXxxu2IA8AOzzXTRhd.jpg')`,
        "releaseDate": 'July 10 2010',
        "duration": '2hr 28min',
        "genre": 'Action, Adventure, Sci-Fi',
        "trailerPath": 'https://www.youtube.com/embed/8hP9D6kZseM',
        "favorite": false
    },
    "the-return-of-the-king": {
        "id": 'the-return-of-the-king',
        "title": "The Lord of the Rings: The Return of the King",
        "subtitle": "Rings",
        "description": `Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.`,
        "smallImgSrc": 'https://image.tmdb.org/t/p/w185/vL5zJK4p5CmyjyVsxcdhmeo7J1J.jpg',
        "largeImgSrc": `url('https://image.tmdb.org/t/p/w780/vL5zJK4p5CmyjyVsxcdhmeo7J1J.jpg')`,
        "releaseDate": 'December 17 2003',
        "duration": '3hr 21min',
        "genre": 'Drama, Adventure, Fantasy',
        "trailerPath": 'https://www.youtube.com/embed/co9SNfJNDN8',
        "favorite": false
    }
}


const Intro = {
    template:
        `<div class="hero-body" style="background: #1e1d1d">
        <div class="container has-text-centered">
          <div class="columns">
            <div class="column is-half is-offset-one-quarter vertical-align">
              <h1 class="home-intro">
                MyFlix
              </h1>
              <p class="home-subintro">Here are some of my favorite movies of all time!</p>
            </div>
          </div>
        </div>
      </div>`
}

const Movie = {
    template:
        `<div :class="[{ 'favorite-shadow': selectedMovie.favorite }, 'hero-body']"
       :style="{ 'background-image': selectedMovie.largeImgSrc }">
       <header class="nav">
        <div class="container">
         <div class="nav-left">
          <router-link to="/" class="nav-item is-active">
           Home
          </router-link>
          <a class="nav-item is-active">
           <span class="tag is-rounded">Films</span>
          </a>
         </div>
         <div class="nav-right desktop">
          <span class="nav-item">
           <a class="title">
            MyFlix
           </a>
          </span>
         </div>
        </div>
       </header>
       <div class="container description-container">
        <div class="columns">
         <div class="column is-three-quarters">
          <h1 class="title">{{ selectedMovie.title }}</h1>
          <h4 class="subtitle">
           <p class="subtitle-tag">{{ selectedMovie.duration }}</p>
           <p class="subtitle-tag">{{ selectedMovie.genre }}</p>
           <p class="subtitle-tag">{{ selectedMovie.releaseDate }}</p>
          </h4>
          <p class="description">{{ selectedMovie.description }}</p>
          <div class="links">
           <router-link 
             :to="{path: '/' + $route.params.id + '/trailer'}"   
             class="button play-button">
              Play <i class="fa fa-play"></i>
           </router-link>
           <a 
       class="button is-link favorites-button"
       @click="addToFavorites">
      <span
       :class="[{ 'hide': selectedMovie.favorite }]">
       Add to
      </span>
      <span
       :class="[{ 'hide': !selectedMovie.favorite }]">
       Remove from
      </span>
       &nbsp;favorites 
       <i class="fa fa-plus-square-o"></i>
      </a>
          </div>
         </div>
        </div>
       </div>
      </div>`,

    data() {
        return {
            selectedMovie: movies[this.$route.params.id]
        }
    },
    watch: {
        $route() {
            this.selectMovie()
        }
    },
    methods: {
        selectMovie() {
            this.selectedMovie = movies[this.$route.params.id]
        },
        addToFavorites() {
            movies[this.$route.params.id].favorite =
                !movies[this.$route.params.id].favorite
        }
    }
}

const MovieTrailer = {
    template: `
     <div class="trailer-body" style="background: #1e1d1d">
      <div class="has-text-centered">
       <div class="columns">
        <div class="column vertical-align">
         <iframe
          allowFullScreen
          frameborder="0"
          height="376"
          :src="trailerUrlPath"
          style="width: 100%; min-width: 536px"
         />
        </div>
       </div>
      </div>
     </div>`,
    data() {
        return {
            trailerUrlPath: movies[this.$route.params.id].trailerPath
        }
    }
}

const routes = [
    { path: '/', component: Intro },
    { path: '/:id', component: Movie },
    { path: '/:id/trailer', component: MovieTrailer }
]
const router = new VueRouter({
    routes
})



const rootApp = new Vue({
    el: '#app',
    router: router,
    data() {
        return {
            movieChoices: movies
        }
    }
})