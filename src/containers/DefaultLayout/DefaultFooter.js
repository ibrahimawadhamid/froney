import React, {Component} from 'react';

class DefaultFooter extends Component {
    render () {
        return (
            <React.Fragment>
                <span><a href="https://github.com/ibrahimawadhamid/froney">Froney</a> &copy; 2018</span>
                <span className="ml-auto">Powered by <a href="https://github.com/ibrahimawadhamid">Ibrahim Awad</a></span>
            </React.Fragment>
        );
    }
}

export default DefaultFooter;
