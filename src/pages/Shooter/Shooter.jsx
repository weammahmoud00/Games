import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../services/axiosInstance";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Shooter() {
    const navigate = useNavigate();
  const [movieS, setMovieS] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("/games", { params: { category: "shooter" } })
      .then((res) => {
        setMovieS(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Row xs={1} md={4} className="g-3 container mx-auto mt-5">
        {movieS.map((movie) => (
          <Col key={movie.id}>
            <Card
              className="card h-100"
              onClick={() => {
                navigate(`/details/${movie.id}`);
              }}
            >
              <div className="cardimg mt-3">
                <Card.Img className=" " variant="top" src={movie.thumbnail} />
              </div>
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center">
                  <Card.Title className="cardTitle">{movie.title}</Card.Title>
                  <p className="free">Free</p>
                </div>
                <Card.Text className="carddes text-center h-50">
                  {movie.short_description.split(" ").slice(0, 8).join(" ")}..
                </Card.Text>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-between w-100">
                <small>{movie.genre}</small>
                <small>{movie.platform}</small>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}
