import PropTypes from "prop-types";

const Container = ({ children }) => {
  return (
    <div className="px-[10px] ml-auto mr-auto flex flex-col items-center">
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
