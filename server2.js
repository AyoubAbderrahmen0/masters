const express = require("express");
const multer = require("multer");
const { spawn } = require("child_process");
const path = require("path");

const app = express();
const port = 6000;

// Configuration de multer pour stocker les fichiers dans le dossier "uploads"
const upload = multer({ dest: "uploads/" });

app.post("/analyze", upload.single("image"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: "Aucune image téléchargée" });
    }

    // Le chemin du fichier téléchargé
    const imagePath = path.join(__dirname, req.file.path);
    
    // Exécuter le script Python pour analyser l'image
    const pythonProcess = spawn("python", ["analyze_emotion.py", imagePath]);

    pythonProcess.stdout.on("data", (data) => {
        const result = data.toString().trim();
        if (result) {
            res.json({ emotion: result });
        } else {
            res.status(500).json({ error: "Aucune émotion détectée" });
        }
    });

    pythonProcess.stderr.on("data", (data) => {
        console.error("Erreur Python:", data.toString());
        res.status(500).json({ error: "Erreur d'analyse" });
    });

    pythonProcess.on("close", (code) => {
        if (code !== 0) {
            console.error(`Le processus Python a échoué avec le code ${code}`);
            res.status(500).json({ error: "Échec du processus Python" });
        }
    });
});

app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
