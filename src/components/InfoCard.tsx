import "../styles/InfoCard.css"
import Stars from "../components/img/Stars.jpg"

function InfoCard() {
    return (
        <div className='infoCard'>
            <span className="title">Title</span>
            <img src={Stars} alt="" className="img" />
            <p className="desc">Description</p>
            <button className="cardButton">Read More</button>
        </div>
    );
}

export default InfoCard;
