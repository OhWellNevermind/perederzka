import PropTypes from "prop-types";

const Container = ({ children }) => {
  return <div className="px-[10px]">{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
