import React, { Component } from 'react'

class TodoItem extends Component{
    render()
    {
        const {title,handleDelete,handleEdit}=this.props;
        
        return(
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                <h6>{title}</h6>
                {console.log.props}
                <div className="todo-icon">
                    <span className="mx-2 text-success">
                        <i className="fa fa-pencil" onClick={handleEdit}></i>
                    </span>
                    <span className="mx-2 text-danger" onClick={handleDelete}>
                        <i className="fa fa-trash"></i>
                    </span>
                </div>
            </li>

        )
    }
}

export default TodoItem;