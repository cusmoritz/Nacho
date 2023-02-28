const express = require('express')
const apiRouter = express.Router()
const {fetchOnePost, newPost, fetchAllPosts} = require('../db/posts');

apiRouter.use('/', apiRouter);

apiRouter.post('/new', async (request, response, next) => {
    try {
        const { incomingPost } = request.body;
        console.log('request body', request.body)
        const creatingNewPost = await newPost(incomingPost);
        response.send(creatingNewPost);
    } catch (error) {
        throw error;
    }
});

apiRouter.get('/posts', async (request, response, next) => {
    try {
        const allPosts = await fetchAllPosts();
        response.send(allPosts);
    } catch (error) {
        throw error;
    }
})

apiRouter.get('/posts/:postId', async (request, response, next) => {
    try {
        const { postId } = request.params;
        const returnPost = await fetchOnePost(postId);
        response.send(returnPost);
    } catch (error) {
        throw error;
    }
});


module.exports = apiRouter;