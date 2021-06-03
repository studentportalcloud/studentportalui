import React from "react";
import { PageHeader } from 'antd';

class HeaderComponent extends React.Component {
    render() {
        return (
            <div>
                <PageHeader className="site-page-header" title="Student Login Page"/>
            </div>
        )
    }
}

export default HeaderComponent;