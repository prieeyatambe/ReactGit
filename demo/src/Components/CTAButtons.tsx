
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';

function CTAButtonsComponent(){
    return(
        <>
        <div style={{display:"flex-box",paddingTop:15}}>
        <FontAwesomeIcon icon={faHeart} color='red' size="xl" style={{paddingLeft:10}}/> 
        <FontAwesomeIcon icon={faShare} size="xl" style={{paddingLeft:10}}/> 
        <FontAwesomeIcon icon={faComment} size="xl" style={{paddingLeft:10}}/>
        </div>
        <div>
            <textarea maxLength={500} placeholder='Type Comment...' style={{width:450,marginTop:10,borderRadius:50,padding:10}}></textarea>
        </div>
        
        </>
    );
}
export default CTAButtonsComponent;