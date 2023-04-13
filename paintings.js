// List of available paintings
const paintings = {
    monet:[ ["monet","https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Banks_of_the_Seine%2C_V%C3%A9theuil%2Cby_Claude_Monet_%284991418057%29.jpg/1280px-Banks_of_the_Seine%2C_V%C3%A9theuil%2Cby_Claude_Monet_%284991418057%29.jpg"],
            ["monet","https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Claude_Monet_-_Int%C3%A9rieur%2C_Apr%C3%A8s_d%C3%AEner.jpg/1163px-Claude_Monet_-_Int%C3%A9rieur%2C_Apr%C3%A8s_d%C3%AEner.jpg?20190527180354"],
            ["monet","https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Claude_Monet_-_Monet%27s_garden_at_V%C3%A9theuil_%281880%29.jpg/709px-Claude_Monet_-_Monet%27s_garden_at_V%C3%A9theuil_%281880%29.jpg?20101004082459"],
            ["monet","https://commons.wikimedia.org/wiki/Category:Paintings_by_Claude_Monet_in_the_National_Gallery_of_Art,_Washington,_D.C.#/media/File:Claude_Monet_-_Palazzo_da_Mula_in_Venice_1908.jpg"]],
    manet:[ ["manet","https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/%C3%89douard_Manet_-_George_Moore_in_the_Artist%27s_Garden.jpg/743px-%C3%89douard_Manet_-_George_Moore_in_the_Artist%27s_Garden.jpg?20080309181828"],
            ["manet","https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Edouard_Manet_-_Plum_Brandy_-_Google_Art_Project.jpg/600px-Edouard_Manet_-_Plum_Brandy_-_Google_Art_Project.jpg?20121018205638"]],
    pissaro:[["pissaro","https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Camille_Pissarro%2C_A_Creek_in_St._Thomas_%28Virgin_Islands%29%2C_1856%2C_NGA_66427.jpg/1200px-Camille_Pissarro%2C_A_Creek_in_St._Thomas_%28Virgin_Islands%29%2C_1856%2C_NGA_66427.jpg?20190813222337"],
            ["pissaro","https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Camille_Pissarro%2C_Boulevard_des_Italiens%2C_Morning%2C_Sunlight%2C_1897%2C_NGA_46673.jpg/1125px-Camille_Pissarro%2C_Boulevard_des_Italiens%2C_Morning%2C_Sunlight%2C_1897%2C_NGA_46673.jpg?20190813222415"]],
}

const sets = new Map([
    ["impressionism",["monet","manet","pissaro"]],
])

/**
 * Get a set of n paintings with the name of artists, of the given genre.
 * n is expected to be a number smaller than the number of paintings available for the genre selected.
 */
export function getPaintingSet(genre, n) {
    const set = sets.get(genre);
    let allPaintings = [];
    for(const artist of set) {
        allPaintings.push(...paintings[artist]);
    }
    // Select n random integers in the total
    let randoms = [];
    for(let i = 0; i < n; i++) {
        let r;
        do(r = Math.floor(Math.random() * allPaintings.length));
        while(randoms.includes(r));
        randoms.push(r);
    }
    console.log(allPaintings)
    console.log(randoms)
    // Get the paintings
    let paintingSet = [];
    for(let i of randoms) {
        paintingSet.push(allPaintings[i]);
    }
    return paintingSet;
}