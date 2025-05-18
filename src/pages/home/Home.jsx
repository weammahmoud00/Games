import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../services/axiosInstance";
import "../../css/home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("/games", { params: { category: "mmorpg" } })
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => {
        console.log(err);
        console.log("err");
      });
  }, []);

  return (
    <>
      <Row xs={1} md={4} className="g-3 container mx-auto mt-5">
        {movies.map((movie) => (
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
