// CSS
import "./Loading.css";
// Assets
import gifLoading from "../../assets/infinity-loading.gif";


const Loading = () => {
  return (
    <>
      <div className="container-loading">
        <img className="loadGif" src={gifLoading} alt="loading..."></img>
      </div>
    </>
  );
};

export default Loading;
