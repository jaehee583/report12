import {useHistory} from 'react-router-dom';
import {Button,Form} from 'react-bootstrap';

function WritePage(props){
  let history = useHistory();
  const moment = require('moment');
  const today = moment();
  return (
    <Form id="write" className="write">
      <div className="write-body">
        <Form.Group>
          <Form.File id="exampleFormControlFile1" />
        </Form.Group>
        <Form.Group>
          <Form.Control type="text" placeholder="제목" />
        </Form.Group>
        <div>{today.format("YYYY-MM-DD")}</div>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" rows={10} placeholder="내용을 적어주세요." />
        </Form.Group>
      </div>
      <div className="_btn">
        <Button onClick={()=>{history.goBack();}}>취소</Button>
        <Button >저장</Button>
      </div>        
    </Form>
  );
}

export default WritePage;