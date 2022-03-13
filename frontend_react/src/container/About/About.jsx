import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { images } from "../../constants";
import { urlFor, client } from "../../client";

import "./About.scss";

export default function About() {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => setAbouts(data));
  });

  return (
    <>
      <h2 className="head-text">
        I Understand That <span>Great Apps</span> means{" "}
        <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about) => (
          <motion.div
            className="app__profile-item"
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 10 }}>
              {about.title}
            </h2>
            <h2 className="p-text" style={{ marginTop: 20 }}>
              {about.description}
            </h2>
          </motion.div>
        ))}
      </div>
    </>
  );
}
