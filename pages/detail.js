import React, { Component } from 'react';
import { withRouter } from 'next/router';

class Detail extends Component {
    render() { 
        console.log(this.props);
        const { router } = this.props;
        return ( 
            <div>
                details----id---{router.query.id}
            </div>
        );
    }
}
 
export default withRouter(Detail);