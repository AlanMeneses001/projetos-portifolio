import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());

const apiKey = process.env.OPENWEATHERMAP_API_KEY;

app.get('/weather', async (req, res) => {
    const city = req.query.city;
    if (!city) return res.status(400).json({ error: 'Cidade é obrigatória' });

    try {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (response.ok) {
            res.json(data);
        } else {
            res.status(response.status).json(data);
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro no servidor' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
