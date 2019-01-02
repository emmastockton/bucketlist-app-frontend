import React from 'react';

class Header extends React.Component {

    render() {
        return (<h1 class="container" style={styles.header}>The Bucket List List</h1>);
    }

}

const styles = {
    header : {
        color: "black",
        margin: "auto"
    }
};

export default Header;