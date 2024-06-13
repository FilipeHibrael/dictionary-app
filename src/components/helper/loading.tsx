import styles from './loading.module.css';

export default function Loading() {
  return (
    <div className={styles.spinner}>
      <div className={styles.innerSpinner}></div>
    </div>
  );
}
