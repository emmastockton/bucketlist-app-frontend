import React from 'react';

class Task extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            editText: props.text,
            editing: false
        };

        this.onDeleteClicked = this.onDeleteClicked.bind(this);
        this.onDoneClicked = this.onDoneClicked.bind(this);
        this.onEditClicked = this.onEditClicked.bind(this);
    }

    onDeleteClicked () {

        this.props.deleteEntryHandler(this.props.idOfEntry);
    }

    onDoneClicked () {
        
        this.props.doneEntryHandler(this.props.idOfEntry);
    }

    onEditClicked () {

        this.props.editEntryHandler(this.props.idOfEntry);
    }

    handleEdit (text) {
        return (text) => this.setState({
          editing: !this.state.editing
        });
    }  
      
    handleChange (text) {
        this.setState({editText: text.target.value});
    }
      
    handleSubmit (text) {
        var val = this.state.editText.trim();
        if (val) {
            this.setState({
              editText: val,
              editing: false,
            });
        } 
    }

    render() {
        return (
            <div className="containter">
                <div className="row justify-content-md-center">
                    <div className="col-2 text-right">
                    <label className={this.state.editing ? 'hidden' : ''} onDoubleClick={this.handleEdit()}>{this.state.editText}</label>
                        <input 
                        className={this.state.editing ? '' : 'hidden'} 
                        value={this.props.nameOfTask}
                        onChange={this.handleChange.bind(this)} 
                        onBlur={this.handleSubmit.bind(this)}
                        />
                    </div>
                    <div className="col-1 text-right">
                        <input 
                            className="btn btn-success" 
                            type="button" 
                            value="Done" 
                            onClick={this.onDoneClicked}
                        />
                    </div>
                    <div className="col-1 text-right">
                        <input 
                            className="btn btn-warning" 
                            type="button" 
                            value="Edit" 
                            onClick={this.onEditClicked}
                        />
                    </div>
                    <div className="col-1 text-left">
                        <input 
                            className="deleteButton btn btn-danger" 
                            type="button" 
                            value="Delete" 
                            onClick={this.onDeleteClicked} 
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
    dottyBorder: {
        border: "1px dashed #000",
        width: "50%",
        margin: "auto",
        marginTop: "5%",
        marginBottom: "5%"
    }
};

export default Task;