const Row = (props)=>{
  const gameRow = props.row();
  const row = gameRow.join("");
  return(
    <div>
      <span>{row}</span>
      <Msg win={gameRow[0]===gameRow[1] && gameRow[1] === gameRow[2]}/>
    </div>
  );
};
