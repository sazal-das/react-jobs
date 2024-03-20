import RingLoader from "react-spinners/RingLoader";
import PropTypes from "prop-types";

const override = {
  display: "block",
  margin: "100px auto",
};

const Spinner = ({ loading }) => {
  return (
    <RingLoader
      color="#4338ca"
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
};

Spinner.propTypes = {
  loading: PropTypes.bool,
};

export default Spinner;
