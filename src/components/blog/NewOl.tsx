import styles from "./newOl.module.css";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function NewOl({ children }: Props) {
  return <ol className={styles.my}>{children}</ol>;
}
