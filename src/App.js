import './App.css';
import './styles/output.css'
import Card from './components/UI/card'
import Image from './components/images/image-omelette.jpeg'
function App() {
  return (
    <div className="bg-neutral-eggshell flex justify-center items-center h-screen font-medium font-sans">
      <Card 
      image= {Image} 
      />
    </div>
  );
}

export default App;
