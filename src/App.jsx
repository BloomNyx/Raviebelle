import "./App.css";

function App() {

  let post = '성심당';
  return(
    <div className='black-nav'>
      <div className="subnav">
        <h1 style={{color : 'plum', fontSize : '16px'}}>앱임</h1>
      </div>
      <h4 id={post}></h4>
    </div>
  )
};

export default App;
