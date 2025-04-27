import './Loading.scss';

const Loading = () => {
  return (
    <div className="loading">
      <div className="sharingan">
        <div className="inner-ring">
          <div className="tomoe"></div>
          <div className="tomoe"></div>
          <div className="tomoe"></div>
          <div className="circle"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;