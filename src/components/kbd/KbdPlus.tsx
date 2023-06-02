import styles from "./kbd.module.css";

export default function Kbd2({ children }: { children: React.ReactNode }) {
  return <kbd className={styles.test}>{children}</kbd>;
}
