import React, { useState } from "react";
import { fetchAllPosts } from "../api";

const AllPosts = () => {

    const [allPosts, setAllPosts] = useState([]);

    useState(() => {
        const fetchingFunction = async () => {
            const fetching = await fetchAllPosts();
            setAllPosts(fetching);
        }
        fetchingFunction();
    }, []);

    return (
        <div>
            <p>All posts.</p>
        </div>
    )
};

export default AllPosts;