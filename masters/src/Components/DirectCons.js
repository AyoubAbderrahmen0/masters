import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

function DirectCons() {
  const [peerId, setPeerId] = useState(null);
  const [isCalling, setIsCalling] = useState(false);
  const localVideoRef = useRef();
  const remoteVideoRef = useRef();
  const peerConnectionRef = useRef();

  useEffect(() => {
    socket.on('connect', () => {
      console.log(`Connected with ID: ${socket.id}`);
    });

    socket.on('incoming-call', (callerId) => {
      setPeerId(callerId);
      setIsCalling(true);
    });

    socket.on('video-offer', (data) => {
      handleVideoOffer(data.offer);
    });

    return () => {
      socket.off('connect');
      socket.off('incoming-call');
      socket.off('video-offer');
    };
  }, []);

  const startCall = () => {
    const peerConnection = new RTCPeerConnection();
    peerConnectionRef.current = peerConnection;

    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((stream) => {
        localVideoRef.current.srcObject = stream;
        stream.getTracks().forEach(track => peerConnection.addTrack(track, stream));

        peerConnection.createOffer()
          .then((offer) => {
            return peerConnection.setLocalDescription(offer);
          })
          .then(() => {
            socket.emit('video-offer', { offer: peerConnectionRef.current.localDescription, to: peerId });
          })
          .catch((error) => {
            console.error('Error during offer creation: ', error);
          });

        peerConnection.ontrack = (event) => {
          remoteVideoRef.current.srcObject = event.streams[0];
        };
      })
      .catch((error) => {
        console.error('Error getting media: ', error);
      });
  };

  const handleVideoOffer = async (incomingOffer) => {
    try {
      const peerConnection = new RTCPeerConnection();
      peerConnectionRef.current = peerConnection;

      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      localVideoRef.current.srcObject = stream;
      stream.getTracks().forEach(track => peerConnection.addTrack(track, stream));

      await peerConnection.setRemoteDescription(new RTCSessionDescription(incomingOffer));
      const answer = await peerConnection.createAnswer();
      await peerConnection.setLocalDescription(answer);

      socket.emit('video-answer', { 
        answer: peerConnection.localDescription, 
        to: peerId 
      });

      peerConnection.ontrack = (event) => {
        remoteVideoRef.current.srcObject = event.streams[0];
      };
    } catch (error) {
      console.error('Error handling offer: ', error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Video Call</h1>
      <div className="flex gap-4 mb-4">
        <video 
          ref={localVideoRef} 
          autoPlay 
          muted 
          className="w-[300px] bg-gray-200" 
        />
        <video 
          ref={remoteVideoRef} 
          autoPlay 
          className="w-[300px] bg-gray-200" 
        />
      </div>
      <button 
        onClick={startCall} 
        disabled={isCalling}
        className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
      >
        {isCalling ? 'On Call' : 'Start Call'}
      </button>
    </div>
  );
}

export default DirectCons;