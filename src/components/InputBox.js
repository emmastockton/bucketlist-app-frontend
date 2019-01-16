import React from 'react';

class InputBox extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            entryName: ""
        };

        this.onSubmitClicked = this.onSubmitClicked.bind(this);
        this.onEntryFieldUpdated = this.onEntryFieldUpdated.bind(this);
    }

    onSubmitClicked () {

        const entryToBeAdded = {
            id: (Math.random() *100),
            description: this.state.entryName,
            completed: false
        };

        this.props.onSumbitEntryHandler(entryToBeAdded);

        this.setState({
            entryName: ""
        });
    }

    onEntryFieldUpdated (event) {
        const description = event.target.value;

        this.setState({
            entryName: description
        });
    }

    render() {
        return (
            <div className="row" style={styles.InputBox}>
                <div className="col">
                    <input 
                        type="text" 
                        class="form-control" 
                        placeholder="I really want to..." 
                        value={this.state.entryName} 
                        onChange={this.onEntryFieldUpdated} 
                    />
                </div>          
                <div className="col">
                    <button 
                        type="button" 
                        class="btn btn-info" 
                        onClick={this.onSubmitClicked}
                    >
                        Add
                    </button>
                </div>
            </div>
            );
    }

}

const styles = {
    inputBox : {
        
    }
};

export default InputBox;