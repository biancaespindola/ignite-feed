import { Header } from "./components/Header";
import { Post } from "./components/Post";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

import "./global.css";
import styles from "./App.module.css";

/**
 * props Post
 * author: {avatar_url: string; name: string; role: string}
 * publishedAt: Date
 * content: string
 */

const post = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/biancaespindola.png",
      name: "Bianca Espindola",
      role: "Front End Developer",
    },
    content: [
      { type: "paragraph", content: "Hi guys" },
      {
        type: "paragraph",
        content:
          "Today I finally released my portfolio. I'm very happy with the result. I put several projects that I did recently.",
      },
      { type: "link", content: "https://biancaespindola.netlify.app/" },
      { type: "paragraph", content: "Thank you for helping me." },
      { type: "link", content: "#frontend" },
    ],
    publishedAt: new Date("2023-04-22 12:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/marconvtr.png",
      name: "Victor Marcon",
      role: "Front End Developer",
    },
    content: [
      { type: "paragraph", content: "Hi guys" },
      {
        type: "paragraph",
        content:
          "Today I finally released my portfolio. I'm very happy with the result. I put several projects that I did recently.",
      },
      { type: "link", content: "https://biancaespindola.netlify.app/" },
      { type: "paragraph", content: "Thank you for helping me." },
      { type: "link", content: "#frontend" },
    ],
    publishedAt: new Date("2023-04-20 12:00:00"),
  },
];

export function App() {
  const [count, setCount] = useState(0);
  //passando propriedades para componentes
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Bianca Espindola"
            content="bom dia pessoaaaal!!!!!!!!"
          />
          <Post
            author="Bianca Espindola"
            content="tudo bem com vocês? rsrsrsrsrs"
          />
          <Post
            author="Bianca Espindola"
            content="hoje o dia está maravilhoso"
          />
        </main>
      </div>
    </div>
  );
}

export default App;
