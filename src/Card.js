function Card(props){
  return (
    <div className="scontainer">
      <div className="card">
        <img src={`https://jaehee583.github.io/report12/images/blog0${
          props.index<10
          ?'0'+props.index
          :props.index
        }.jpg`}/>
        <div>
          <h2>{props.블로그글.title}</h2>
          <p>{props.블로그글.content}</p>
        </div>
      </div>
    </div>
  )
}

export default Card;