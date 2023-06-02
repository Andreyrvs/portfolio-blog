import CodeProps from "@/types/CodeProps";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export default function Code(props: CodeProps) {
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
        padding: ".7rem .1rem",
        fontSize: "16px",
        width: "100%",
        color: "#fff",
      }}
      lineNumberContainerStyle={{ left: "0" }}
    >
      {children}
    </SyntaxHighlighter>
  );
}
