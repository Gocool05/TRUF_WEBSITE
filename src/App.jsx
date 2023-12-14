import { AllRoutes } from "./routes/AllRoutes";
import {Cloudinary} from "@cloudinary/url-gen";
import { Payment } from "./pages/Payment";
import PaymentComponent from "./pages/Pay";



const App = ()=> {
  const cld = new Cloudinary({cloud: {cloudName: 'dx78kzenz'}});
  return (
    <div className="App">
       {/* <AllRoutes/> */}
       {/* <PaymentComponent/> */}
       <Payment/>
    </div>
  );
}

export default App;
