import PlayerHands from "./PlayerHands";
import SideSlots from "./SideSlots";

export default function Arena() {


    const sceneStyle = {
        WebkitTransform: 'rotateX(-41deg) rotateY(0deg)',
        MozTransform: 'rotateX(-41deg) rotateY(0deg)',
        msTransform: 'rotateX(-41deg) rotateY(0deg)',
        transform: 'rotateX(-41deg) rotateY(0deg)',
    };

    const photonShaderStyle = {
        backgroundColor: 'rgba(#54545463)',
    };


    return (
        <div id="tridiv">
            <PlayerHands side="topside" />
            <div className="scene" style={sceneStyle}>
                <div className="shape cuboid-1 cub-1">
                    <div className="face ft">
                        <div className="photon-shader" style={photonShaderStyle}></div>
                    </div>
                    <div className="face bk">
                        <div className="photon-shader" style={photonShaderStyle}></div>
                    </div>
                    <div className="face rt">
                        <div className="photon-shader" style={photonShaderStyle}></div>
                    </div>
                    <div className="face lt">
                        <div className="photon-shader" style={photonShaderStyle}></div>
                    </div>
                    <div className="face bm">
                        <div className="photon-shader" style={photonShaderStyle}></div>
                    </div>
                    <div className="face tp">
                        <div className="photon-shader" style={photonShaderStyle}>
                            <SideSlots />
                            <SideSlots />
                        </div>
                    </div>
                </div>
            </div>
            <PlayerHands side="bottomside" />
         </div>
    )
}