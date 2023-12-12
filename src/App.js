import { AllRoutes } from "./routes/AllRoutes";
import {Cloudinary} from "@cloudinary/url-gen";
import Pay from "./components/Pay";

function App() {
  const cld = new Cloudinary({cloud: {cloudName: 'dx78kzenz'}});
  return (
    <div className="App">
       {/* <AllRoutes/> */}
       <Pay/>
    </div>
  );
}

export default App;
