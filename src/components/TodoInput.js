import React from 'react';


class TodoInput extends React.Component{
    render()
    {
        const {item,handleChange,handleSubmit,editItem}=this.props;
        var x;
        return(
        <div className="card mt-4">
            
            <div className= "card-body my-3">
            <form onSubmit={handleSubmit}>
            <div className="input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text bg-primary text-white">
                        <i className="fa fa-book"></i>
                    </div>
                </div>
                <input type="text" className="form-control text-capitalize"
                value={item}
                onChange={handleChange}
                placeholder="Add a Todo Item" required/>

            </div>
            <button type="submit" className={editItem==true?'btn btn-block btn-primary mt-4':'btn btn-block btn-success mt-4'} >
               {editItem==true?'Edit Item':'Add Item'} </button> 
               

            </form>
            </div>
        </div>)
    }
}
export default TodoInput;

