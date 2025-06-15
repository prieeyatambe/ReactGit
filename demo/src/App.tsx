import CTAButtonsComponent from "./Components/CTAButtons";
import PostComponent from "./Components/Post";
import ProfilComponent from "./Components/Profile";

function App() {
  return (
   <>
    <div style={{width:500,backgroundColor:"whitesmoke",padding:10,borderRadius:50}}>
    <ProfilComponent></ProfilComponent>
    <PostComponent></PostComponent>
    <CTAButtonsComponent></CTAButtonsComponent>
    </div>
    <div style={{width:500,backgroundColor:"whitesmoke",padding:10,borderRadius:50,marginTop:10}}>
    <ProfilComponent></ProfilComponent>
    <PostComponent></PostComponent>
    <CTAButtonsComponent></CTAButtonsComponent>
    </div>
    <div style={{width:500,backgroundColor:"whitesmoke",padding:10,borderRadius:50,marginTop:10}}>
    <ProfilComponent></ProfilComponent>
    <PostComponent></PostComponent>
    <CTAButtonsComponent></CTAButtonsComponent>
    </div>
    <div style={{width:500,backgroundColor:"whitesmoke",padding:10,borderRadius:50,marginTop:10}}>
    <ProfilComponent></ProfilComponent>
    <PostComponent></PostComponent>
    <CTAButtonsComponent></CTAButtonsComponent>
    </div>
   </>
  );
}

export default App;
