'use client';
import { useState, useRef, useEffect } from "react";

export default function AudioPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const togglePlay = () => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.play();
            setIsPlaying(true);
        }
    }, []);

    return (
        <div className="audio-player">
            <audio ref={audioRef} src="./music/frank.mp3" />
            <button onClick={togglePlay} className="play-button">
                {isPlaying ? "Pause" : "Play"}
            </button>
        </div>
    );
}