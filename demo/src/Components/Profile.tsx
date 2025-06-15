import { CupHotFill } from "react-bootstrap-icons";
import "../Components/style.css"
function ProfilComponent(){

    return(
        <>
            <div style={{backgroundColor:"ButtonFace",borderRadius:40,padding:15}}>
                <CupHotFill size={30} color="black" className="al" style={{backgroundColor:"red"
                ,borderRadius:50,padding:5}}></CupHotFill>&ensp;<span className="spn"> Red Hot Coffee Company</span> <br />
            </div>
        </>
    );
}
export default ProfilComponent;