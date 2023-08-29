export default function PlayerHands(props){
    return(
        <>
            <div className="hands" id={props.side}>
                <div className="cards"></div>
                <div className="cards"></div>
                <div className="cards"></div>
                <div className="cards"></div>
            </div>
        </>
    )
}