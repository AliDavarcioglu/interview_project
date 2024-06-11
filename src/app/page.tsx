"use client";
import { useState } from 'react';
import styles from "./page.module.css";

export default function Home() {
  const [squares, setSquares] = useState(Array(6).fill("")); // Karelerin içeriğini izlemek için durum
  const [stack, setStack] = useState([]); // Değişiklikleri izlemek için yığın

  const onBackButtonClick = () => {
    if (stack.length > 0) {
      const lastChange = stack.pop();
      const newSquares = [...squares];
      newSquares[lastChange.index] = lastChange.prevValue;
      setSquares(newSquares);
      setStack([...stack]); // Yığını güncelle
    } else {
      alert("Geri alınacak hamle kalmadı!"); // Uyarı mesajı göster
    }
  };

  const onSquareClick = (index) => {
    const newSquares = [...squares];
    const prevValue = newSquares[index];
    const newValue = prevValue === "X" ? "" : "X";

    newSquares[index] = newValue;
    setSquares(newSquares);

    const newStack = [...stack, { index, prevValue }];
    setStack(newStack); // Değişikliği yığına ekle
  };

  return (
    <main className={styles.main}>
      <button className={styles.backButton} onClick={onBackButtonClick}>
        GERİ AL
      </button>

      <div className={styles.squareContainer}>
        {squares.map((value, index) => (
          <div
            key={index}
            className={styles.square}
            onClick={() => onSquareClick(index)}
          >
            {value}
          </div>
        ))}
      </div>
    </main>
  );
}
