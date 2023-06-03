import styles from "./kbd.module.css";

type Props = {
  children: React.ReactNode;
};

export default function Kbd({ children }: Props) {
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
