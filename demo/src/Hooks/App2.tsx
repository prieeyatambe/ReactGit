import { CallbackHiok } from "./CallBackHook";
import { EffectHook, MemoHook, ReferenceHook, ReferenceHookDOM } from "./useEffectHook";
import { CarState, Counter, StateHook } from "./usestatefook";


const  App2=()=>{
    return(
        < >
        {/* <div style={{textAlign:"center",paddingTop:20,color:"turquoise"}}>
        <StateHook></StateHook>
        </div>
        <div style={{textAlign:"center",paddingTop:20,color:"black"}}>
        <CarState></CarState>
        </div> 
        <div style={{textAlign:"center",paddingTop:20,color:"black"}}>
        <Counter></Counter>
        </div>*/}
        {/* <EffectHook></EffectHook>
        <ReferenceHook></ReferenceHook>
        <ReferenceHookDOM></ReferenceHookDOM>
        <MemoHook></MemoHook> */}
        <CallbackHiok></CallbackHiok>
        </>
    );
}
export default App2;