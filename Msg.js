const Msg = (props)=>{
  console.log(props);
    return(
      props.win ? <h3>Ding Ding Ding!!!</h3> : <h3>Maybe next time? :(</h3>
    );
  };
