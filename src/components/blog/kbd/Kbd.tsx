import styles from "./kbd.module.css";

export default function Kbd({ children }: { children: React.ReactNode }) {
  const items: string[] = String(children).split(/(\+)/);

  const handlePlus = items.map((item, index) =>
    item === "+" ? (
      <kbd key={index} className={styles.kbd_plus}>
        +
      </kbd>
    ) : (
      <kbd key={index} className={styles.kbd}>
        {item}
      </kbd>
    )
  );

  return <>{handlePlus}</>;
}
