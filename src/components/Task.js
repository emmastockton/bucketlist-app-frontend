import React from 'react';

class Task extends React.Component {

    constructor(props) {
        super(props);

        this.onDeleteClicked = this.onDeleteClicked.bind(this);
        this.onDoneClicked = this.onDoneClicked.bind(this);
    }

    onDeleteClicked () {

        this.props.deleteEntryHandler(this.props.idOfEntry);
    }

    onDoneClicked () {
        
        this.props.doneEntryHandler(this.props.idOfEntry);
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
                        type="button" 
                        value="Done" 
                        onClick={this.onDoneClicked}
                    />
                </div>
                <div className="col">
                    <input 
                        className="deleteButton btn btn-danger" 
                        type="button" 
                        value="Delete" 
                        onClick={this.onDeleteClicked} 
                    />
                </div>
            </div>
        );
    }

}



export default Task;