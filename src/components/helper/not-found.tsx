import styles from './not-found.module.css';

const text = {
  title: 'No Definitions Found',
  message:
    "Sorry pal, we couldn't find definitions for the word you were looking for.",
  resolution:
    'You can try the search again at later time or head to the web instead.',
};

export default function NotFound() {
  return (
    <section className={styles.container}>
      <span>&#128549;</span>
      <h1 className="font-lg">{text.title}</h1>
      <p className="font-xs">{text.message}</p>
      <p className="font-xs">{text.resolution}</p>
    </section>
  );
}
