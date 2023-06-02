import styles from "./kbd.module.css";

export default function Kbd({ children }: { children: React.ReactNode }) {
  return <kbd className={styles.kbd}>{children}</kbd>;
}
