const client = require('./index');

const newPost = async (postInfo) => {
    const {business, location, chip_val, chip_notes, cheese_val, cheese_notes, meat_val, meat_notes, guac_val, guac_notes, salsa_val, salsa_notes, other_notes, cost } = postInfo;
    try {
        const {rows: [newPost]} = await client.query(`
        INSERT INTO posts (business, location, chip_val, chip_notes, cheese_val, cheese_notes, meat_val, meat_notes, guac_val, guac_notes, salsa_val, salsa_notes, other_notes, cost)
        VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)
        RETURNING *
        ;
        `,[business, location, chip_val, chip_notes, cheese_val, cheese_notes, meat_val, meat_notes, guac_val, guac_notes, salsa_val, salsa_notes, other_notes, cost]);
        console.log('new post created: ', newPost);
        return newPost;
    } catch (error) {
        throw error;
    }
};

const fetchAllPosts = async () => {
    try {
        const {rows: allPosts} = await client.query(`
        SELECT * FROM posts
        ;
        `);
        return allPosts;
    } catch (error) {
        throw error;
    }
}

const fetchOnePost = async(postId) => {
    try {
        const {rows: [onePost]} = await client.query(`
        SELECT * FROM posts
        WHERE id = $1
        ;
        `, [postId]);
        return onePost;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    newPost,
    fetchAllPosts,
    fetchOnePost,

}