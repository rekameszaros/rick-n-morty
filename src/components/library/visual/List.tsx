import React from "react";
import { motion } from "framer-motion";
import ListCSS from "./List.module.css";

interface IListProps {
  specie: string;
  type: string;
  gender: string;
  origin: string;
  location: string;
}

const List = ({ specie, type, gender, origin, location }: IListProps) => {
  return (
    <div className={ListCSS.default}>
      <motion.ul whileHover={{ scale: 1.2 }}>
        <motion.li
          whileHover={{
            scale: 1.2,
            backgroundColor: [
              "rgb(255,255,255)",
              "rgba(245, 245, 245)",
              "rgb(245, 245, 245)",
            ],
          }}
        >
          <label> Specie:</label> <p>{specie}</p>{" "}
        </motion.li>
        <motion.li
          whileHover={{
            scale: 1.2,
            backgroundColor: [
              "rgb(255,255,255)",
              "rgba(245, 245, 245)",
              "rgb(245, 245, 245)",
            ],
          }}
        >
          <label>Type:</label> <p>{type}</p>{" "}
        </motion.li>
        <motion.li
          whileHover={{
            scale: 1.2,
            backgroundColor: [
              "rgb(255,255,255)",
              "rgba(245, 245, 245)",
              "rgb(245, 245, 245)",
            ],
          }}
        >
          <label> Gender:</label> <p>{gender}</p>
        </motion.li>
        <motion.li
          whileHover={{
            scale: 1.2,
            backgroundColor: [
              "rgb(255,255,255)",
              "rgba(245, 245, 245)",
              "rgb(245, 245, 245)",
            ],
          }}
        >
          <label> Origin:</label> <p>{origin}</p>
        </motion.li>
        <motion.li
          whileHover={{
            scale: 1.2,
            backgroundColor: [
              "rgb(255,255,255)",
              "rgba(245, 245, 245)",
              "rgb(245, 245, 245)",
            ],
          }}
        >
          <label>Location:</label> <p>{location}</p>
        </motion.li>
      </motion.ul>
    </div>
  );
};

export default List;
