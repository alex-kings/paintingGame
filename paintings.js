// Artist names
const artistNames = [
    "Claude Monet",
    "Edouard Manet",
    "Camille Pissaro",
    "Pierre-Auguste Renoir"
];

// List of available paintings
const paintings = {
    monet:[ [artistNames[0],"https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Banks_of_the_Seine%2C_V%C3%A9theuil%2Cby_Claude_Monet_%284991418057%29.jpg/1280px-Banks_of_the_Seine%2C_V%C3%A9theuil%2Cby_Claude_Monet_%284991418057%29.jpg"],
            [artistNames[0],"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Claude_Monet_-_Int%C3%A9rieur%2C_Apr%C3%A8s_d%C3%AEner.jpg/1163px-Claude_Monet_-_Int%C3%A9rieur%2C_Apr%C3%A8s_d%C3%AEner.jpg?20190527180354"],
            [artistNames[0],"https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Claude_Monet_-_Monet%27s_garden_at_V%C3%A9theuil_%281880%29.jpg/709px-Claude_Monet_-_Monet%27s_garden_at_V%C3%A9theuil_%281880%29.jpg?20101004082459"],
            [artistNames[0],"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Claude_Monet_-_Palazzo_da_Mula_in_Venice_1908.jpg/800px-Claude_Monet_-_Palazzo_da_Mula_in_Venice_1908.jpg"]],
    manet:[ [artistNames[1],"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/%C3%89douard_Manet_-_George_Moore_in_the_Artist%27s_Garden.jpg/743px-%C3%89douard_Manet_-_George_Moore_in_the_Artist%27s_Garden.jpg?20080309181828"],
            [artistNames[1],"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Edouard_Manet_-_Plum_Brandy_-_Google_Art_Project.jpg/600px-Edouard_Manet_-_Plum_Brandy_-_Google_Art_Project.jpg?20121018205638"]],
    pissaro:[[artistNames[2],"https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Camille_Pissarro%2C_A_Creek_in_St._Thomas_%28Virgin_Islands%29%2C_1856%2C_NGA_66427.jpg/1200px-Camille_Pissarro%2C_A_Creek_in_St._Thomas_%28Virgin_Islands%29%2C_1856%2C_NGA_66427.jpg?20190813222337"],
            [artistNames[2],"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Camille_Pissarro%2C_Boulevard_des_Italiens%2C_Morning%2C_Sunlight%2C_1897%2C_NGA_46673.jpg/1125px-Camille_Pissarro%2C_Boulevard_des_Italiens%2C_Morning%2C_Sunlight%2C_1897%2C_NGA_46673.jpg?20190813222415"]],
    renoir:[[artistNames[3],"https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Auguste_Renoir_-_Claude_Renoir_in_Clown_Costume_-_Google_Art_Project.jpg/800px-Auguste_Renoir_-_Claude_Renoir_in_Clown_Costume_-_Google_Art_Project.jpg"],
            [artistNames[3],"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Dance-At-Bougival.jpg/800px-Dance-At-Bougival.jpg"]]
}


const painterMap = new Map([
    ["impressionism",["monet","manet","pissaro","renoir"]],
])

/**
 * Return the paintings and painters for each round.
*/
export function getRounds(genre, n) {
    const set = painterMap.get(genre);
    let allPaintings = [];
    for(const artist of set) {
        allPaintings.push(...paintings[artist]);
    }
    let allPainters = [];
    allPaintings.forEach((p)=>{
        if(!allPainters.includes(p[0])) allPainters.push(p[0])
    });

    // Select n random integers in the total
    let randoms = [];
    for(let i = 0; i < n; i++) {
        let r;
        do(r = Math.floor(Math.random() * allPaintings.length));
        while(randoms.includes(r));
        randoms.push(r);
    }

    // Create the sets
    let rounds = [];
    for(let i = 0; i < n; i++) {
        // Make the round
        let round = {
            painting:allPaintings[randoms[i]],
            painters:[],
        }

        let randoms2 = [];
        for(let i = 0; i < 4; i++) {
            let r;
            do(r = Math.floor(Math.random() * allPainters.length));
            while(randoms2.includes(r));
            randoms2.push(r);
            round.painters.push(allPainters[r]);
        }
        rounds.push(round)
    }

    // Returns the paintings in the set, and all the painters of the genre
    return rounds;
}
