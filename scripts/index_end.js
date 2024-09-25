// import movies from './movies.json' assert {type: 'json'}

const movies = [
    {
        title: "Fight Club",
        year: 1999,
        director: "David Fincher",
        rate: 8.1,
        actors: [
            "Edward Norton",
            "Brad Pitt",
            "Helena Bonham Carter"
        ]
    },
    {
        title: "Interstellar",
        year: 2014,
        director: "Christopher Nolan",
        rate: 7.9,
        actors: [
            "Matthew McConaughey",
            "Anne Hathaway"
        ]
    },
    {
        title: "Forrest Gump",
        year: 1994,
        director: "Robert Zemeckis",
        rate: 7.9,
        actors: [
            "Tom Hanks",
            "Gary Sinise",
            "Robin Wright"
        ]
    },
    {
        title: "Inception",
        year: 2010,
        director: "Christopher Nolan",
        rate: 7.5,
        actors: [
            "Leonardo DiCaprio",
            "Joseph Gordon-Levitt"
        ]
    },
    {
        title: "Shining",
        year: 1980,
        director: "Stanley Kubrick",
        rate: 8.1,
        actors: [
            "Jack Nicholson",
            "Shelley Duvall",
            "Danny Lloyd"
        ]
    },
    {
        title: "Pulp Fiction",
        year: 1994,
        director: "Quentin Tarantino",
        rate: 8.3,
        actors: [
            "John Travolta",
            "Samuel L. Jackson"
        ]
    }
]

console.log(movies[2].director)