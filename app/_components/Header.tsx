import styles from './Header.module.css';
import Logo from '@/_assets/logo.svg';
import normalizeUrl from '@/_utils/normalizeUrl';
import Link from 'next/link';

export default function Header({ action }: { action: 'start' | 'stop' }) {
  const canStop = action === 'stop';

  return (
    <header className={styles.header}>
      <Link href={'/'}>
      <Logo className={styles.logo}/>
      </Link>
      <a
        className={styles.slidershow}
        href={normalizeUrl(canStop ? '/' : '/krishna')}
      >
        {canStop ? 'Stop' : 'Start'} slideshow
      </a>
    </header>
  );
}
