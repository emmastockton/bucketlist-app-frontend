import React from 'react';

class Task extends React.Component {

    constructor(props) {
        super(props);

        this.onDeleteClicked = this.onDeleteClicked.bind(this);
    }

    onDeleteClicked () {

        this.props.deleteEntryHandler(this.props.idOfEntry);
    }

    render() {
        return (
            <div className="row">
                <div className="col">
                    {this.props.nameOfTask}
                </div>
                <div className="col">
                    <input 
                        className="btn btn-success" 
                        type="button" value="Done" 
                    />
                </div>
                <div className="col">
                    <input 
                        className="deleteButton btn btn-danger" 
                        type="button" 
                        value="Delete" 
                        onClick={this.onDeleteClicked} 
                        deleteEntryHandler={this.props.deleteEntryHandler} 
                    />
                </div>
            </div>
        );
    }

}



export default Task;