const sortPosts = (userInput, posts) => {
    const keyword_dict = {
        "relaxation": ["relax", "chill"],
        "creativity": ["art, inspiration, creative"]
    }
  const sortedPosts = [...posts];
  return sortedPosts;
};

export { sortPosts };
