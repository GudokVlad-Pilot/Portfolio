import "../styles/InfoCard.css"

function InfoCard() {
    return (
        <div className='infoCard'>
            <span className="title">Title</span>
            {/* <img src={} alt="" className="img" /> */}
            <p className="desc">Description</p>
            <button className="cardButton">Read More</button>
        </div>
    );
}

export default InfoCard;
