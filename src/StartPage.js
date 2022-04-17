import {Jumbotron,Button} from 'react-bootstrap';
import Card from './Card';
import {Link} from 'react-router-dom';

function StartPage(props){
  return (
    <div>
    {/* 메인 프롤로그 */}
    <Jumbotron className="background">
      <h1>BLOG TITLE</h1>
      <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus officiis quasi ea nemo, rerum magnam doloremque eveniet, minus iste soluta animi quisquam quidem! Temporibus maiores doloribus voluptatum nisi cumque reprehenderit?
      Enim beatae sunt illo error, doloribus at rerum aperiam labore explicabo molestias alias iste. Ad cupiditate mollitia ex id nesciunt quod aspernatur numquam porro iure voluptates. Placeat quam quas cupiditate.
      </p>
    </Jumbotron>
    {/* 블로그글 */}
    <div className="container">
      <div className="row">
        {
          props.article.map((item,idx,arr)=>{
            if(idx>=props.viewCnt){
              return false;
            }else{
              return <Link to={`/Detail/${item.id}`} key={idx}>
                      <Card 블로그글={item} index={idx} key={item.id}/>
                    </Link>
            }
          })                   
        }
      </div>
      <div className="morebtn">
        <Button variant="btn btn-primary" onClick={
            ()=>{props.viewCntChange(props.viewCnt+5);}
          }>5개 더보기</Button>
        </div>
      </div>
    </div>
  )
}

export default StartPage;