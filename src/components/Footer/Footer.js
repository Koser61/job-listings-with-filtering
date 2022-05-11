import styles from './Footer.module.scss';

const Footer = () => (
  <footer className={styles.component}>
    <div className={styles.attribution}>
      Challenge by <a href='https://www.frontendmentor.io?ref=challenge' target='_blank' rel='noreferrer'>
        Frontend Mentor
      </a>. 
      Coded by <a href='https://github.com/p-kosinski'>p-kosinski</a>.
    </div>
  </footer>
);

export default Footer;