import type { ReactNode } from "react";
import marked from "marked";

interface MarkdownReaderProps {
  source: string; // path to markdown file relative to project root
}

export default function MarkdownReader({ source }: MarkdownReaderProps): ReactNode {
  // This component is a placeholder; actual loading done via getStaticProps
  // We'll expect the markdown content to be passed via markdown prop
  // For simplicity, we'll render null and rely on the page to pass content.
  return null;
}
