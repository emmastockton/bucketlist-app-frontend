import React from 'react';

class DoneTask extends React.Component {

    constructor(props) {
        super(props);

        this.onDeleteCompletedClicked = this.onDeleteCompletedClicked.bind(this);
    }

    onDeleteCompletedClicked () {

        this.props.deleteCompletedEntryHandler(this.props.idOfEntry);
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-2 text-center" style={styles.DoneTask}>
                        {this.props.nameOfDoneTask}
                    </div>
                    <div className="col-2 text-left">
                        <input 
                            className="deleteButton btn btn-danger" 
                            type="button" 
                            value="Delete" 
                            onClick={this.onDeleteCompletedClicked} 
                        />
                    </div>
                </div>
            <div style={styles.dottyBorder}>
            </div>
            </div>
        );
    }

}

const styles = {
    DoneTask: {
        textDecoration: "line-through"
    },
    dottyBorder: {
        border: "1px dashed #000",
        width: "50%",
        margin: "auto",
        marginTop: "5%",
        marginBottom: "5%"
    }
}

export default DoneTask;