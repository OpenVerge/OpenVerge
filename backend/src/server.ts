import app from './app';

const PORT = process.env.PORT || 3000;

app.get('/api', (req, res) => {
    res.json({ message: 'Server is healthy' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
