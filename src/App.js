import { Routes , Route, Navigate } from "react-router-dom";

import Loginpage from "./pages/login/loginpage";
import Registerpage from "./pages/register/Registerpage";
import Homepage from "./pages/home/Homepage";
import Layout from "./layout/Layout";
import { useContext } from "react";
import { AuthContext } from "./Context/Authcontext";
import Profile from "./pages/profile/profile";

function App() {

  const {currentUser} = useContext(AuthContext);

  const ProtectedRoute = ({children}) =>{
    if(!currentUser){
      return <Navigate to={'/'} />
    }

    return children;
  }

  
  return (
    <>
    <Routes>
       <Route path="/" element={<Loginpage />} />
       <Route path="register" element={<Registerpage />} />     

       <Route path="home" element={ <ProtectedRoute> <Layout /> </ProtectedRoute>} > 
         <Route path="/home" element={ <Homepage />} />
         <Route path="/home/profile" element={ <Profile />} />
       </Route>

    </Routes>
    </>
  );
}

export default App;
