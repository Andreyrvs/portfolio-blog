import styles from "./miniCode.module.css";
import CodeProps from "@/types/CodeProps";

export default function Code({ children }: CodeProps) {
  return <span className={styles.code}>{children}</span>;
}
