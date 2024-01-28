const Alert = ({ error }) => {
  return (
    <>
      <div className={`alert alert-${error.color} mt-3`} role="alert">
        {error.msg}
      </div>
    </>
  );
};

export default Alert;
