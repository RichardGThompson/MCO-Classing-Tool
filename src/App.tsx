import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { TextInput } from './components/text-input/text-input.component';

function App() {
  return (
    <>    
      <div>Hello Classing Tool</div>
      <TextInput id='test-input' label='Text Input Test' />
    </>
  );
}

export default App;
