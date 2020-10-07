import Reveal from "reveal.js";

import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";
import "./reveal.css";

//
// RevealMarkdown
//
import RevealMarkdown from "reveal.js/plugin/markdown/markdown.esm";

//
// RevealHighlight
//
import RevealHighlight from "reveal.js/plugin/highlight/highlight.esm";
import "reveal.js/plugin/highlight/monokai.css";

Reveal.initialize({
  plugins: [RevealMarkdown, RevealHighlight],
  hash: true,
  markdown: {
    smartypants: true
  }
});
