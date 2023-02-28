const { BASE_URL = 'http://localhost:3000/api' } = process.env;

export const createNewPost = async (newPost) => {
    try {
        const response = await fetch(`${BASE_URL}/new`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                incomingPost: newPost,
            })
        });
        const createdPost = await response.json();
        return createdPost;
    } catch (error) {
        throw error;
    }
};

export const fetchAllPosts = async () => {
    try {
        const result = await fetch(`${BASE_URL}/posts`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const allPosts = await result.json();
        return allPosts;
    } catch (error) {
        throw error;
    }
}