import { Main } from '../Main';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { ContentRouter } from '../ContentRouter';

export function App() {
  return (
    <div className="App">
      <Header />
      <ContentRouter />
      <Footer />
    </div>
  );
}
