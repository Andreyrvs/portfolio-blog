import CodeProps from "@/types/CodeProps";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { vs2015 } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export default function BlockCode(props: CodeProps) {
  const { language, children } = props;
  return (
    <SyntaxHighlighter
      showLineNumbers
      showInlineLineNumbers
      language={language}
      style={vs2015}
      wrapLines={true}
      customStyle={{
        backgroundColor: "#07080a",
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
