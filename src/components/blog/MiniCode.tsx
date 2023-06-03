import styles from "./miniCode.module.css";
import CodeProps from "@/types/CodeProps";

export default function Code({ children }: CodeProps) {
  return <code className={styles.code}>{children}</code>;
}
