import { AllRoutes } from "./routes/AllRoutes";
import {Cloudinary} from "@cloudinary/url-gen";




const App = ()=> {
  const cld = new Cloudinary({cloud: {cloudName: 'dx78kzenz'}});
  return (
    <div className="App">
       <AllRoutes/>
    
    </div>
  );
}

export default App;
