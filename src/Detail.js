import Card from './Card';
import { Link } from 'react-router-dom';
import {Jumbotron,Button} from 'react-bootstrap';

function Detail(props){
  return (
    <div className="container">
      <h2 style={{textAlign: 'center',fontWeight: '700',fontSize: '24px',marginBottom: '30px',color: '#007bff'}}>글목록</h2>
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
  );
}

export default Detail;