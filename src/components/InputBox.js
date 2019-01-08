import React from 'react';

class InputBox extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            entryDescription: ""
        };

        this.onSubmitClicked = this.onSubmitClicked.bind(this);
        this.onEntryFieldUpdated = this.onEntryFieldUpdated.bind(this);
    }

    onSubmitClicked () {
        alert(this.state.entryDescription);
    }

    onEntryFieldUpdated (event) {
        const entryName = event.target.value;

        this.setState({
            entryDescription: entryName
        })
    }

    render() {
        return (
            <div className="row">
                <div className="col">
                    <input style={styles.InputBox} type="text" class="form-control" placeholder="I really want to..." value={this.state.entryDescription} onChange={this.onEntryFieldUpdated} />
                </div>          
                <div className="col">
                    <button type="button" class="btn btn-info" onClick={this.onSubmitClicked}>Add</button>
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