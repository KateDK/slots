const Slots = (props)=>{
  return(
    <div>
      <Row  row={props.playRound()}/>
      <Row  row={props.playRound()}/>
    </div>

  );
};
