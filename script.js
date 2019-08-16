var movies = [{
        title: 'Field of Dreams',
        rating: 5,
        hasWatched: true
    },
    {
        title: 'Twister',
        rating: 4,
        hasWatched: true
    },
    {
        title: 'Little Women',
        rating: 4.5,
        hasWatched: false
    },
    {
        title: 'Daddy"s Home ',
        rating: 1,
        hasWatched: false
    }
];


movies.forEach(function (movie) {
    if (movie.hasWatched == true) {
        console.log('You Have Watched ' + movie.title + ' - ' + movie.rating + ' Stars');
    } else {
        console.log('You Have Not Watched ' + movie.title + ' - ' + movie.rating + ' Stars');
    }
});