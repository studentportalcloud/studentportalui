import { Row, Col } from "antd";
import React from "react";
import LoginComponent from "./LoginComponent";
import SignupComponent from "./SignupComponent";

class AuthenticationComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Row>
                    <Col span={12}>
                        <SignupComponent />
                    </Col>
                    <Col span={12}>
                        <LoginComponent />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default AuthenticationComponent;