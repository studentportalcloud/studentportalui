import React from "react";
import { PageHeader } from 'antd';
import 'antd/dist/antd.css';
import "./headerStyles.css";

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