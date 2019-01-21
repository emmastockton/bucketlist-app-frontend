import React from 'react';

class DoneTask extends React.Component {

    render() {
        return (
            <div className="containter">
                <div className="row">
                    <div className="col" style={styles.DoneTask}>
                        {this.props.nameOfDoneTask}
                    </div>
                </div>
            </div>
        );
    }

}

const styles = {
    DoneTask: {
        textDecoration: "line-through"
    }
}

export default DoneTask;