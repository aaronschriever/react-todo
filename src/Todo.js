import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';




class Todo extends React.Component {
  //  const { classes } = props;

componentWillUnmount(){

}
render(){
    const props = this.props;
        return( 
       
        <Card>    
        {props.description}  {(props.completed===1 && <DoneIcon/>) }<DeleteIcon className="icon" onClick={(e, id) => props.handleDelete(props.id, e)}/>
        </Card>
       
    );
    
}
}
export default Todo;