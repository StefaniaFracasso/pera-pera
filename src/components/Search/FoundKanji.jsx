import {ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SpinnerDotted } from "spinners-react";

const FoundKanji = ({ foundKanji }) => {

  return (
    <ListGroup as="ol" numbered className="mt-3">
      {foundKanji.length > 0 && foundKanji ? (
        foundKanji.map((kanji) => {
          return (
          <ListGroup.Item as="li" key={kanji.kanji._id}>
            <Link to={`/kanji/${kanji.kanji.character}`} id="foundKanji">{kanji.kanji.character}</Link>
          </ListGroup.Item>
          )
        } )
        ): (<div>
          <SpinnerDotted
            size={90}
            thickness={100}
            speed={100}
            color="rgba(43, 92, 98, 1)"
            className="mt-5"
          />
        </div>)}
    </ListGroup>
  );
};

export default FoundKanji;

// <Container className="mt-3">
//   {foundKanji.length > 0 && foundKanji ? (
//   <Row className="d-flex mt-5 justify-content-center">
//     {foundKanji.map((kanji) => (
//       <Col key={kanji.kanji._id}
//       >
//       <Link
//         to={`/kanji/${kanji.kanji.character}`}
//         className="foundKanji"
//       >
//         {kanji.kanji.character}
//       </Link>
//       </Col>
//     ))}
//   </Row>
//   ) : (<p className="text-center mt-5">No kanji found :(</p>)}
// </Container>