import React from "react";
import StoryDetail from "./StoryDetail";

function StoriesList({stories}) {
    if (!stories) {
        return;
    }

    const storyItems = stories.map((story) => {
        return (
            <StoryDetail key={story.id} story={story} />
        )
    })

    return (
        <>
            <ul>
                {storyItems}
            </ul>
        </>
    );
};

export default StoriesList;