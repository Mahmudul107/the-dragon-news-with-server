import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container} from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Header = () => {
  

  return (
    <Container className="mt-5 mb-5">
      <div className="text-center">
        <img src={logo} alt="" />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favour</small>
          <p>{moment().format("dddd, MMMM D, YYYY")}</p>
        </p>
      </div>
      <div className="d-flex mb-4 mt-5 bg-primary">
        <Button variant="danger">Latest</Button>
        <Marquee className="text-white" speed={70} pauseOnHover={true}>
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Marquee>
      </div>

    </Container>
  );
};

export default Header;
