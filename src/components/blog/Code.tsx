import CodeProps from "@/types/CodeProps";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export default function BlockCode(props: CodeProps) {
  const { language, children } = props;
  return (
    <SyntaxHighlighter
      showLineNumbers
      showInlineLineNumbers
      language={language}
      style={atomOneDark}
      wrapLines={true}
      customStyle={{
        margin: 0,
        padding: "0.7rem 0.1rem",
        fontSize: "16px",
        borderRadius: "15px",
      }}
    >
      {children}
    </SyntaxHighlighter>
  );
}
