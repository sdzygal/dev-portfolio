import notFoundImg from "../../assets/not_found_page.png";
import blobImg from "../../assets/blob.svg";
import "./not_found.css";

const PageNotFound = () => {
    return (
            <div className="notFound">
                <img src={blobImg} alt="blob" className="blob" />
                <img src={notFoundImg} alt="giraffe" className="animal" />
                <div className="notFound_content">
                <h1>404</h1>
                <p>It looks like you are lost...</p></div>
            </div>
    );
};

export default PageNotFound;