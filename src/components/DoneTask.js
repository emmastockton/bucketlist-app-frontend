import React from 'react';

class DoneTask extends React.Component {

    render() {
        return (
            <div className="containter">
                <div className="row">
                    <div className="col">
                        {this.props.nameOfDoneTask}
                    </div>
                </div>
            </div>
        );
    }

}



export default DoneTask;