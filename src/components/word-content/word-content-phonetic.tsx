'use client';
import PlayIcon from '@/icons/play-icon';
import { Phonetic } from '@/types/word-data';
import styles from './word-content-phonetic.module.css';
import React, { useRef } from 'react';

type TypeParams = {
  word: string;
  phonetics: Phonetic[];
};

export default function WordContentPhonetic({ word, phonetics }: TypeParams) {
  const [currentPhonetic, setCurrentPhonetic] = React.useState<Phonetic>();
  const audioRef = useRef<HTMLAudioElement>(null);

  React.useEffect(() => {
    const phoneticWithAudio = phonetics.find((e) => e.text && e.audio);
    const defaultPhonetic = phonetics.find((e) => e.text);
    setCurrentPhonetic(phoneticWithAudio || defaultPhonetic);
  }, [phonetics]);

  function playAudio() {
    if (currentPhonetic?.audio) audioRef.current?.play();
  }

  return (
    <div className={styles.container}>
      <div>
        <h1 className={`${styles.word} font-xl`}>{word}</h1>
        <span className={`${styles.text} font-sm`}>
          {currentPhonetic?.text}
        </span>
      </div>
      {currentPhonetic?.audio && (
        <div className={styles.play} onClick={playAudio}>
          <PlayIcon />
          <audio ref={audioRef} src={currentPhonetic?.audio} />
        </div>
      )}
    </div>
  );
}
