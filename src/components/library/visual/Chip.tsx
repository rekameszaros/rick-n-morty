import React, { MouseEventHandler } from "react";
import styles from "./Chip.module.css";
import { X } from "lucide-react";

export interface ChipProps {
  text: string;
  onClick: (text: string) => void;
}

export default function Chip({ text, onClick }: ChipProps) {
  const handleClick = () => {
    onClick(text);
  };

  return (
    <div className={styles.chip}>
      <span>{text}</span>
      <button onClick={handleClick}>
        <X color="#00b0c8" size="19" />
      </button>
    </div>
  );
}
