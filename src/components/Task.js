import React from 'react';

class Task extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col">
                    Do Something
                </div>
                <div className="col">
                    <input type="button" value="delete" />
                </div>
                <div className="col">
                    <input type="button" value="done" />
                </div>
            </div>
        );
    }

}


export default Task;