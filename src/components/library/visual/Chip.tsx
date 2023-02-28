import React, { MouseEventHandler } from "react";
import styles from "./Chip.module.css";
import { Smile, Skull } from "lucide-react";

export interface ChipProps {
  text: string;
  onClick: (text: string) => void;
  variant: "filled" | "outlined";
  color: string;
  status: "alive" | "dead"; // New status prop
}

export default function Chip({ text, onClick, variant = "filled", color, status }: ChipProps) {
  const handleClick = () => {
    onClick(text);
  };

  const getBackgroundColor = () => {
    if (variant === "filled") {
      return "#e1f8dc";
    } else {
      return "#FFFFFF";
    }
  };

  const getIcon = () => {
    if (status === "alive") {
      return <Smile color={color} size="19" />;
    } else {
      return <Skull color={color} size="19" />;
    }
  };

  return (
    <div
      className={styles.chip}
      style={{
        backgroundColor: getBackgroundColor(),
        borderColor: color,
      }}
    >
      <span>{text}</span>
      <button onClick={handleClick}>
        {getIcon()}
      </button>
    </div>
  );
}
