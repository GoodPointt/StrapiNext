const Banner = ({ path }) => {
  return (
    <div style={{}}>
      {path && (
        <video autoPlay loop muted preload="auto" width="100%">
          <source src={path} type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export default Banner;
