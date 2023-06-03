import styles from "./newOl.module.css";
import CodeProps from "@/types/CodeProps";

export default function NewOl({ children }: CodeProps) {
  return <ol className={styles.my}>{children}</ol>;
}
