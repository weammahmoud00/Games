import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../../css/details.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useParams } from 'react-router-dom';
import {axiosGame} from '../../services/axiosGame';




export default function Details() {
  const {id} = useParams()
  const [movie, setMovie]= useState([])
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(true);
 
const navigate = useNavigate()

  const getdetails = async () => {
    try{
      let res = await axiosGame.get('', {
        params: { id },
      });
      setMovie(res.data)
      console.log(res.data);
  }catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
      getdetails()
  },[])



  return (
    <>
      <Modal show={show} onHide={() => navigate('/')} >
        <div className="custom-modal">
          <div className="container mx-auto mt-5">
            <Modal.Header closeButton>
              <Modal.Title>Details Game</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="row g-3">
                <div className="col-4">
                  <img src={movie.thumbnail} alt="" className='w-100 ' />
                </div>
                <div className="col-8">
                  <div className="detailsTitle">
                    <h1>Title: {movie.title}</h1>
                  </div>
                  <div className="detailsInfo">
                    <h5 className='d-flex'>Category: <span className='info'> {movie.genre}</span> </h5>
                    <h5 className='d-flex'>Platform: <span className='info'>{movie.platform}</span></h5>
                    <h5 className='d-flex'>Status: <span className='info'>{movie.status}</span> </h5>
                  </div>
                  <p className='des'>{movie.description}</p>
                  <a
                    href={movie.game_url}
                    className="btn showG"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Show Game
                  </a>
                </div>
              </div>
            </Modal.Body>
          </div>
        </div>
      </Modal>
    </>
  );
}
