import CodeProps from "@/types/CodeProps";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export default function Code(props: CodeProps) {
  const { language, children } = props;
  return (
    <SyntaxHighlighter
      showLineNumbers
      showInlineLineNumbers
      language={language}
      style={atomOneDark}
      customStyle={{
        margin: 0,
        padding: ".7rem .1rem",
      }}
    >
      {children}
    </SyntaxHighlighter>
  );
}
