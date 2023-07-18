import React, { useEffect, useState } from "react";
import StoriesList from "../Components/StoriesList";
import Search from "../Components/Search";

function NewsContainer() {
    const [storyIds, setStoryIds] = useState([]);
    const [stories, setStories] = useState([]);
    const [filteredStories, setFilteredStories] = useState([]);

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
        const slicedIds = storyIds.slice(0, 20);
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

    const handleSearchSubmit = function(searchPhrase) {
        const storiesCopy = [...stories]
        const newFilteredStories = storiesCopy.filter((story) => {
            const formattedTitle = story.title.toLowerCase();
            return formattedTitle.includes(searchPhrase);
        });
        setFilteredStories(newFilteredStories);
    }

    return (
        <>
            <h1>Hacker News</h1>
            <Search handleSearchSubmit={handleSearchSubmit} />
            {filteredStories.length > 0 ? <h2>Search results:</h2> : <h2>Top Stories:</h2>}
            {filteredStories.length > 0 ? <StoriesList stories={filteredStories} /> : <StoriesList stories={stories} />}
        </>
    );
};

export default NewsContainer;