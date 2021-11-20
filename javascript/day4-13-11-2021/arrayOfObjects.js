const movies = [
    {
        title: "Parasite",
        rating: 4.7
    },
    {
        title: "Interstellar",
        rating: 4.8
    },
    {
        title: "Casino Royale",
        rating: 4.6
    }
];

for(let obj = 0; obj < movies.length; obj++) {
    console.log(`${movies[obj].title} has a rating of ${movies[obj].rating}/5 \n`);
}

console.log(Object.keys(movies[0]));
