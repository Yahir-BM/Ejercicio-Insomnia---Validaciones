const express = require('express');
const userRoutes = require('../apprest02/src/routes/user.routes');

const app = express();
app.use(express.json());

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/api/users`);
})