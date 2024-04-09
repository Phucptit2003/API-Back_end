const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

app.use(cors());
const posts = [
    { id: 1, title: 'First Post', content: 'Content of first post' },
    { id: 2, title: 'Second Post', content: 'Content of second post' },
];

app.get('/api/posts', (req, res) => {
    const titles = posts.map(post => ({ id: post.id, title: post.title }));
    res.json(titles);
});

app.get('/api/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find(post => post.id === postId);
    if (post) {
        res.json(post);
    } else {
        res.status(404).json({ error: 'Post not found' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
