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
   return (
     <div>
       <h1>Lucky Slots</h1>
       <Slots playRound={()=>playRound}/>
     </div>
   );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
