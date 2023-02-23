const { BASE_URL = 'http://localhost:3000/api' } = process.env;

apiRouter.get('/posts/:postId', async (request, response, next) => {
    try {
        const postId = request.params;
        const response = await fetch(`${BASE_URL}/posts/${postId}`);
        const result = response.json();
        return result;
    } catch (error) {
        throw error;
    }
});