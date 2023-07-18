import React, { useEffect, useState } from "react";
import StoriesList from "../Components/StoriesList";

function NewsContainer() {
    const [storyIds, setStoryIds] = useState([]);
    const [stories, setStories] = useState([]);

    useEffect(() => {
        getStoryIds();
    }, []);

    useEffect(() => {
        getStories();
    }, [storyIds]);

    const getStoryIds = async function() {
        const res = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
        const data = await res.json();
        setStoryIds(data);
    }

    const getStories = function() {
        const slicedIds = storyIds.slice(0, 10);
        const storyPromises = slicedIds.map((id) => {
            return (
                fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
                    .then(res => res.json())
            );
        });

        Promise.all(storyPromises)
            .then((data) => {
                setStories(data);
            })
    };

    return (
        <>
            <h1>Hacker News</h1>
            <h2>Top Stories:</h2>
            <StoriesList />
        </>
    );
};

export default NewsContainer;