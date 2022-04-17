import {useParams} from 'react-router-dom';
function DetailPage(props){
    let {id} = useParams();
    return (
        <div className="col-md-6">
            <img src={`https://jaehee583.github.io/report12/images/blog0${
            id<10
            ?'0'+id
            :id
            }.jpg`}/>
            <h2>{props.article[id].title}</h2>
            <p>{props.article[id].날짜}</p>
            <p>{props.article[id].content}</p>
        </div>
    );
}

export default DetailPage;