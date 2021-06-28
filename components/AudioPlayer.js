import React, { useState, useRef } from "react";
import styles from "../styles/AudioPlayer.module.css";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { FaPause, FaPlay } from "react-icons/fa";

export default function AudioPlayer() {
  const [play, setPlay] = useState(false);
  const audioPlayer = useRef();

  const togglePlay = () => {
    const prevValue = play;
    setPlay(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
  };

  return (
    <div className={styles.audioPlayer}>
      <audio
        ref={audioPlayer}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        preload="metadata"
      ></audio>
      <button className={styles.forwardBackward}>
        <BsArrowLeftShort />
        30s
      </button>
      <button className={styles.playPause} onClick={togglePlay}>
        {play ? <FaPause /> : <FaPlay className={styles.play} />}
      </button>
      <button className={styles.forwardBackward}>
        <BsArrowRightShort />
        30s
      </button>
      <div className={styles.currentTime}>0:00</div>
      <div>
        <input className={styles.progressBar} type="range"></input>
      </div>
      <div className={styles.duration}>2:49</div>
    </div>
  );
}
