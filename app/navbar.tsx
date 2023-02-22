'use client';

import { ConnectIcon, DashboardIcon, FeedIcon, VillaIcon } from 'assets/Icons';
import Link from 'next/link';
import Logo from 'assets/Logo';
import styles from 'styles/Navbar.module.scss';
import { usePathname } from 'next/navigation';

enum NavbarLink {
  Home = '',
  Blog = 'blog',
  Projects = 'projects',
  About = 'about',
}

export default function Navbar() {
  const pathname = usePathname();
  const currentPage = pathname.split('/')[1];
  let currentLink: NavbarLink;

  if (currentPage.length === 4 && !isNaN(parseInt(currentPage))) {
    currentLink = NavbarLink.Blog;
  } else currentLink = currentPage as NavbarLink;

  return (
    <header className={styles.navbar}>
      <Link href="/" tabIndex={-1}>
        <Logo className={styles.logo} />
      </Link>

      <nav className={styles.links}>
        <Link
          href="/"
          className={currentLink === NavbarLink.Home ? styles.selected : ''}
        >
          <span>
            <VillaIcon />
          </span>
          <h6>
            <span>&nbsp;</span>home
          </h6>
        </Link>
        <Link
          href="/blog"
          className={currentLink === NavbarLink.Blog ? styles.selected : ''}
        >
          <span>
            <FeedIcon />
          </span>
          <h6>
            <span>&nbsp;</span>blog
          </h6>
        </Link>
        <Link
          href="/projects"
          className={currentLink === NavbarLink.Projects ? styles.selected : ''}
        >
          <span>
            <DashboardIcon />
          </span>
          <h6>
            <span>&nbsp;</span>projects
          </h6>
        </Link>
        <Link
          href="/about"
          className={currentLink === NavbarLink.About ? styles.selected : ''}
        >
          <span>
            <ConnectIcon />
          </span>
          <h6>
            <span>&nbsp;</span>about
          </h6>
        </Link>
      </nav>
    </header>
  );
}
