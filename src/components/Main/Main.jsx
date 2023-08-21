// import styles from './Main.module.css';
import { Promo } from './Promo';
import { NavTab } from './NavTab';
import { AboutProject } from './AboutProject';
import { Techs } from './Techs';
import { AboutMe } from './AboutMe';
import { Portfolio } from './Portfolio';

export function Main({ className }) {
  return (
    <main className={className}>
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </main>

  );
}
