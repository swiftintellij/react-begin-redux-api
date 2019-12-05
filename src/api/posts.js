
const sleep = n => new Promise(resolve => setTimeout(resolve, n));


const posts = [
    {
        id: 1,
        title: "타이틀1",
        body: "내용1내용1내용1"
    },
    {
        id: 2,
        title: "타이틀2",
        body: "내용2내용2내용2"
    },
    {
        id: 3,
        title: "타이틀3",
        body: "내용3내용3내용3"
    },
];

export const getPosts = async () => {
    await sleep(500);
    return posts;
};

export const getPostById = async id => {
    await sleep(500);
    return posts.find(post => post.id === id);

};