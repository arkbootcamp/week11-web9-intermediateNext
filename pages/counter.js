import { useDispatch, useSelector } from "react-redux";
import { Button, Container } from "react-bootstrap";
import {
  increaseCounter,
  decreaseCounter,
  resetCounter,
} from "../redux/actions/counter";

export function getServerSideProps(context) {
  const count = useSelector((state) => state.counter.count);
  console.log(count);
  return {
    props: {},
  };
}

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <>
      <Container className="text-center">
        <h1>Counter</h1>
        <hr />
        <h3>{count}</h3>
        <Button variant="primary" onClick={() => dispatch(decreaseCounter())}>
          -
        </Button>
        <Button
          variant="secondary"
          className="mx-2"
          onClick={() => dispatch(resetCounter())}
        >
          RESET
        </Button>
        <Button variant="primary" onClick={() => dispatch(increaseCounter())}>
          +
        </Button>
      </Container>
    </>
  );
}

export default Counter;
