import React from 'react';

class InputBox extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            entryName: ""
        };

        this.onSubmitClicked = this.onSubmitClicked.bind(this);
    }

    onSubmitClicked () {
        alert('Hello World');
    }

    render() {
        return (
            <div className="row">
                <div className="col">
                    <input style={styles.InputBox} type="text" class="form-control" placeholder="I really want to..." value={this.state.entryDescription} />
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