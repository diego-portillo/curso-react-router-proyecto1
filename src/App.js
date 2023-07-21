import { HashRouter, Routes, Route } from "react-router-dom";
import { BlogPage } from "./BlogPage";
import { HomePage } from "./HomePage";
import { ProfilePage } from "./ProfilePage";
import { Menu } from "./Menu";
import { AuthProvider, AuthRoute} from './auth'
import { BlogPost} from './BlogPost'
import { LoginPage } from "./LoginPage";
import { LogoutPage } from "./LogoutPage";

function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Menu/>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/blog" element={<BlogPage/>}>
              <Route path=":slug" element={<BlogPost/>}/>
            </Route>
            <Route path="/profile" element={
              <AuthRoute>
                <ProfilePage/>
              </AuthRoute>
            }/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/logout" element={
              <AuthRoute>
                <LogoutPage/>
              </AuthRoute>
            }/>
            <Route path="*" element={<p>Not Found</p>}/>
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;
