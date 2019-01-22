import React from 'react';

class InputBox extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            entryName: ""
        };

        this.onSubmitClicked = this.onSubmitClicked.bind(this);
        this.onEntryFieldUpdated = this.onEntryFieldUpdated.bind(this);
        this.onEnterHit = this.onEnterHit.bind(this);
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

    onEnterHit (event) {
       //need to fix this one
        var input = document.getElementById("inputBox");

        input.addEventListener("keyup", function(event) {
            event.preventDefault();

            if (event.keyCode === 13) {
                document.getElementById("inputBox").click();
            }
        });
    }

    render() {
        return (
            <div className="row" style={styles.InputBox}>
                <div className="col">
                    <input 
                        id="inputBox"
                        type="text" 
                        class="form-control" 
                        placeholder="I really want to..." 
                        value={this.state.entryName} 
                        onChange={this.onEntryFieldUpdated} 
                    />
                </div>          
                <div>
                    <button 
                        type="button" 
                        className="btn btn-info" 
                        onClick={this.onSubmitClicked}
                        onKeyPress={this.onEnterHit}
                        style={styles.addButton}
                    >
                        Add
                    </button>
                </div>
            </div>
            );
    }

}

const styles = {
    InputBox: {
        padding: "20px"
    },

    addButton : {
        backgroundColor: "white",
        color: "black",
        border: "2px solid #d35400",
    }
};

export default InputBox;