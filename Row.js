const Row = (props)=>{
  const gameRow = props.row();
  return(
    <div>
      <div>
        {gameRow.map(elm=> <span key={Math.random()} className="symbol">{elm}</span>)}
      </div>
      <Msg win={gameRow[0]===gameRow[1] && gameRow[1] === gameRow[2]}/>
    </div>
  );
};
