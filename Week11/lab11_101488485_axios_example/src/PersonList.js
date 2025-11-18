import React from "react";
import axios from "axios";
import { Card, Row, Col, Button } from "react-bootstrap";

class PersonList extends React.Component {
  state = { persons: [] };

  componentDidMount() {
    axios
      .get("https://randomuser.me/api/?results=10")
      .then(({ data }) => this.setState({ persons: data.results }))
      .catch(console.error);
  }

  render() {
    const { persons } = this.state;

    const headerStyle = {
      backgroundColor: "#29a329",
      color: "white",
      padding: "12px",
      marginBottom: "20px",
      fontWeight: "bold",
    };

    const cardStyle = {
      backgroundColor: "#178ca6",
      color: "white",
      borderRadius: "4px",
    };

    const cardHeaderStyle = {
      backgroundColor: "#147a91",
      fontWeight: "bold",
    };

    const profileImgStyle = {
      width: "140px",
      height: "140px",
      borderRadius: "50%",
      marginBottom: "10px",
    };

    return (
      <div className="container mt-4 mb-4">
        <h2 className="text-center" style={headerStyle}>
          User List
        </h2>

        {persons.map((p) => {
          const { login, name, picture, gender, location, email, dob, registered, phone, cell } = p;

          return (
            <Card key={login.uuid} className="mb-3" style={cardStyle}>
              <Card.Header style={cardHeaderStyle}>
                {name.title} {name.first} {name.last} – {login.uuid}
              </Card.Header>

              <Card.Body>
                <Row>
                  <Col md={3} className="text-center">
                    <img src={picture.large} alt="profile" style={profileImgStyle} />
                    <Button variant="primary">Details</Button>
                  </Col>

                  <Col md={9}>
                    <p>
                      <strong>User Name:</strong> {login.username}
                    </p>
                    <p>
                      <strong>Gender:</strong> {gender.toUpperCase()}
                    </p>
                    <p>
                      <strong>Time Zone Description:</strong> {location.timezone.description}
                    </p>
                    <p>
                      <strong>Address:</strong> {location.street.number} {location.street.name},{" "}
                      {location.city}, {location.state}, {location.country} – {location.postcode}
                    </p>
                    <p>
                      <strong>Email:</strong> {email}
                    </p>
                    <p>
                      <strong>Birth Date and Age:</strong> {dob.date} ({dob.age})
                    </p>
                    <p>
                      <strong>Register Date:</strong> {registered.date}
                    </p>
                    <p>
                      <strong>Phone#:</strong> {phone}
                    </p>
                    <p>
                      <strong>Cell#:</strong> {cell}
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default PersonList;
