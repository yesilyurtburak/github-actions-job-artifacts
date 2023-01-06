import MainContent from './components/MainContent';
import logo from './assets/images/logo.png';

function App() {
  return (
    <>
      <header>
        <div id="logo-img">
          <img src={logo} />
        </div>
        <h1>Learn & Master GitHub Actions</h1>
        <h2>Changed this line to see if caching dependencies speeds up the workflow's run speed.</h2>
      </header>
      <MainContent />
    </>
  );
}

export default App;
