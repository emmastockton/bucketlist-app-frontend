import React from 'react';

class Task extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col">
                    {this.props.nameOfTask}
                </div>
                <div className="col">
                    <input type="button" value="Delete" />
                </div>
                <div className="col">
                    <input type="button" value="Done" />
                </div>
            </div>
        );
    }

}


export default Task;