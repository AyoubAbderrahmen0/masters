import React, { useState, useRef, useEffect } from "react";

function Image0() {
    const [result, setResult] = useState("");
    const [cameraActive, setCameraActive] = useState(false);
    const [imageFile, setImageFile] = useState(null); // Stocker l'image importée
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [stream, setStream] = useState(null);
  
    // Activer la caméra
    const startCamera = async () => {
      try {
        const userStream = await navigator.mediaDevices.getUserMedia({
          video: true, // Demande l'accès à la caméra
        });
  
        videoRef.current.srcObject = userStream;
        setStream(userStream); // Garder une référence au flux pour pouvoir l'arrêter plus tard
        setCameraActive(true);
      } catch (error) {
        console.error("Erreur lors de l'accès à la caméra :", error);
      }
    };
  
    // Arrêter la caméra
    const stopCamera = () => {
      if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop()); // Arrêter chaque piste vidéo
      }
      setCameraActive(false);
    };
  
    // Capturer l'image depuis le flux vidéo
    const captureImage = () => {
      const canvas = canvasRef.current;
      const video = videoRef.current;
  
      if (canvas && video) {
        const context = canvas.getContext("2d");
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
  
        // Convertir l'image capturée en Blob
        canvas.toBlob((blob) => {
          const file = new File([blob], "captured-image.jpg", { type: "image/jpeg" });
  
          // Arrêter la caméra après avoir capturé l'image
          stopCamera();
  
          // Envoyer l'image au serveur pour analyse
          analyzeImage(file);
        });
      }
    };
  
    // Envoyer l'image au backend pour l'analyse
    const analyzeImage = async (file) => {
      try {
        const formData = new FormData();
        formData.append("image", file); // Ajouter le fichier à FormData
  
        const response = await fetch("http://localhost:5000/analyze", {
          method: "POST",
          body: formData,
        });
  
        const data = await response.json();
        if (data.emotion) {
          setResult(data.emotion); // Exemple : "Happy" ou "Sad"
        } else {
          setResult("Erreur lors de l'analyse");
        }
      } catch (error) {
        console.error("Erreur lors de l'analyse :", error);
        setResult("Erreur lors de l'analyse");
      }
    };
  
    // Gérer l'importation d'une image
    const handleImageUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
        setImageFile(file); // Stocker l'objet File
      }
    };
  
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        {!cameraActive && !imageFile ? (
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ padding: "10px 20px", fontSize: "16px" }}
            />
          </div>
        ) : (
          <>
            {imageFile ? (
              <div style={{ marginBottom: "20px" }}>
                <img
                  src={URL.createObjectURL(imageFile)}
                  alt="Uploaded"
                  style={{
                    width: "100%",
                    maxWidth: "600px",
                    border: "1px solid #ddd",
                    marginBottom: "20px",
                  }}
                />
                <button
                  onClick={() => analyzeImage(imageFile)}
                  style={{ padding: "10px 20px", fontSize: "16px", marginBottom: "20px" }}
                >
                  Analyser l'image
                </button>
              </div>
            ) : (
              <div style={{ marginBottom: "20px" }}>
                <video
                  ref={videoRef}
                  autoPlay
                  style={{
                    width: "100%",
                    maxWidth: "600px",
                    border: "1px solid #ddd",
                    marginBottom: "20px",
                  }}
                />
              </div>
            )}
            <canvas ref={canvasRef} style={{ display: "none" }} width="640" height="480"></canvas>
            {!imageFile && (
              <button
                onClick={captureImage}
                style={{ padding: "10px 20px", fontSize: "16px", marginBottom: "20px" }}
              >
                Prendre une photo
              </button>
            )}
            <button onClick={stopCamera} style={{ padding: "10px 20px", fontSize: "16px" }}>
              Fermer la caméra
            </button>
          </>
        )}
  
        {result && <p style={{ marginTop: "20px" }}>Émotion détectée : {result}</p>}
      </div>
    );
  }

export default Image0
