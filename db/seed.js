const client = require('./index');

const { dropTables, createTables } = require('./initdb');
const { newPost } = require('./posts');

const seedPosts = [
    {
        business: "Ollies",
        location: "Frisco",
        chip_val: 8,
        chip_notes: "Very good chips, hearty.",
        cheese_val: 10,
        cheese_notes: "Two different types: shredded, sauce. L A Y E R S",
        meat_val: 10,
        meat_notes: "Very tasty shredded pork.",
        guac_val: 5,
        guac_notes: "Tasty but expensive and too small a side.",
        salsa_val: 9.5,
        salsa_notes: "Tasty but too small a side. Homemade.",
        other_notes: "Large helping. The layers were next level.",
        cost: 15.99,
    }
];

const addPosts = async () => {
    await Promise.all(seedPosts.map( async (post) => {
        await newPost(post);
    }))
} 

const rebuildDb = async () => {
    await dropTables();
    await createTables();
    await addPosts();
};

client.connect();
rebuildDb().catch(console.error).finally(() => client.end());