import { Card } from './components/Card';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { data } from './data';

const cards = data.map((item) => {
  return (
    <Card 
      key={item.id}
      {...item}
    />
  )
})

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <section className='cards-list'>
        {cards}
      </section>
    </div>
  );
}

export default App;
