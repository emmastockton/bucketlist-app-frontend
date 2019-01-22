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
        this.enterRef = React.createRef();
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

    onEnterHit(event) {
       
        let code = event.which;

        if (code === 13) {
           this.enterRef.current.click();
        };
    }

    render() {
        return (
            <div className="row" style={styles.InputBox}>
                <div className="col">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="I really want to..." 
                        value={this.state.entryName} 
                        onChange={this.onEntryFieldUpdated}
                        onKeyPress={this.onEnterHit.bind(this)} 
                    />
                </div>          
                <div>
                    <button 
                        type="button" 
                        className="btn btn-info" 
                        onClick={this.onSubmitClicked}
                        style={styles.addButton}
                        ref={this.enterRef}
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