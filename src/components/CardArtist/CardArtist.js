import './CardArtist.css';

const CardArtist = (props) => {
    return (
        <div className='artist-card'>
            <div className="img">
                <img src={props.imgUrl} />
            </div>
            <div className='content-artist-card'>
                <div className='title-artist-card'>{props.title}</div>
                <span className='span-artist-card'>{props.span}</span>
            </div>
        </div>
    );
};

export default CardArtist;