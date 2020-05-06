const symbols = ["X","O","7"];

const playRound = ()=>{
  const res = [];
  for(let i = 0; i < 3; i++){
     res.push(symbols[Math.floor(Math.random()*3)]);
  }
  return res;
};
class App extends React.Component{
  render(){
   return <h1>Hello World</h1>;
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
