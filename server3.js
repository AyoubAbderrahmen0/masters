const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();

// Middleware pour parser le JSON
app.use(bodyParser.json());

// Route pour traiter les messages du chatbot
app.post('/chat', async (req, res) => {
  const userInput = req.body.message;

  if (!userInput) {
    return res.status(400).json({ error: "Message non fourni" });
  }

  try {
    // Utilisation de l'API Hugging Face pour le modèle text2text-generation (par exemple DialoGPT)
    const response = await axios.post('https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium', {
      inputs: userInput,
    }, {
      headers: {
        'Authorization': `Bearer YOUR_HUGGINGFACE_API_KEY` // Remplacez par votre clé API Hugging Face
      }
    });

    const chatbotResponse = response.data[0].generated_text;
    return res.json({ response: chatbotResponse });
  } catch (error) {
    console.error("Erreur lors de l'appel à l'API Hugging Face:", error);
    return res.status(500).json({ error: "Erreur lors de l'analyse du message" });
  }
});

// Démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});