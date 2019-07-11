import * as React from 'react';
import PotentialError from 'components/PotentialError';
class App extends React.Component {
    render () {
        return (
            <div className="admin-app full-height">
                <PotentialError>{this.props.children}</PotentialError>
            </div>
        );
    }
}

export default App;
