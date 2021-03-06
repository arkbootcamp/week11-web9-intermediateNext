import { connect } from "react-redux";
import { Button, Container } from "react-bootstrap";
import Layout from "components/Layout";
import Navbar from "components/module/Navbar";
import {
  increaseCounter,
  decreaseCounter,
  resetCounter,
} from "../redux/actions/counter";
import { initializeStore } from "redux/store";

export async function getStaticProps() {
  const reduxStore = initializeStore();
  const { dispatch } = reduxStore;
  dispatch(increaseCounter());

  return { props: { initialReduxState: reduxStore.getState() } };
}

function Counter(props) {
  // console.log(props);
  return (
    <Layout title="Counter App">
      <Navbar />
      <Container className="text-center">
        <h1>Counter</h1>
        <hr />
        <h3>{props.counter.count}</h3>
        <Button variant="primary" onClick={props.decreaseCounter}>
          -
        </Button>
        <Button
          variant="secondary"
          className="mx-2"
          onClick={props.resetCounter}
        >
          RESET
        </Button>
        <Button variant="primary" onClick={props.increaseCounter}>
          +
        </Button>
      </Container>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  counter: state.counter,
});

const mapDispatchToProps = { increaseCounter, decreaseCounter, resetCounter };
// (null, mapDispatchToProps)
// (mapStateToProps)
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
