import React from 'react';
import styles from './Quote.module.css';

function Quote() {
  return (
    <div className={styles.quote}>
      <p>
        Mathematics are the result of mysterious powers which no one
        understands, and which the unconscious recognition of beauty must play
        an important part. Out of an infinity of designs a mathematician chooses
        one pattern for beautys sake and pulls it down to earth. —
        <span>Marston Morse, American mathematician</span>
      </p>
    </div>
  );
}

export default Quote;
