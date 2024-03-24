import React from "react";
import styles from "./PostToc.module.css";

function removeCodeBlockComments(content: string) {
  let inCodeBlock = false;
  let newMarkdown = "";

  for (const line of content.split("\n")) {
    if (line.startsWith("```")) {
      inCodeBlock = !inCodeBlock;
    } else if (inCodeBlock && line.startsWith("#")) {
      continue;
    }
    newMarkdown += line + "\n";
  }
  return newMarkdown.trim();
}


function extractHeadings(content: string) {
  const parsed = removeCodeBlockComments(content);

  const pattern = /(?!(?:^``))#{1,6} (.*?)(?:\n|$)/gm;
  let match;
  const headings = [];

  while ((match = pattern.exec(parsed)) !== null) {
    const level = match[0].split(" ")[0].length;
    const value = match[1];
    const id = match[1].toLowerCase().replaceAll(" ", "_");
    headings.push({ id, value, level });
  }
  return headings;
}

const tocStyles: Record<number, string> = {
  2: styles.toch2,
  3: styles.toch3,
  4: styles.toch4,
}

function PostToc({ content }: { content: string }) {
  const headings = extractHeadings(content);
  return (
    <nav className={styles.wrapper}>
      <strong>Table of Contents:</strong>
      {
        headings.map((h) => (
          <div key={h.id} className={tocStyles[h.level]}>
            <a
              className={styles.toc_link}
              href={`#${h.id}`}>{h.value}</a>
          </div>
        ))
      }
    </nav>
  );
}

export default PostToc

