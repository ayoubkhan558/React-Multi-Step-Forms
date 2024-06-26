const CongratsStep = (props) => {
  const { state, onSignOut } = props;
  console.log(state)

  return (
    <div className="form-group">
      <h2>
        Hello, {state?.email}
        <button onClick={onSignOut}>Sign Out</button>
      </h2>
      <img src="https://i.giphy.com/6nuiJjOOQBBn2.gif" alt="" />
    </div>
  );
};

export default CongratsStep;
