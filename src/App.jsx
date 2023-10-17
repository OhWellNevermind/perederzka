import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import Home from "./pages/Home";
import { LoginPage } from "./pages/LoginPage";
import { AuthPage } from "./pages/AuthPage";
import { RegistrationForm } from "./components/RegistrationForm/RegistrationForm";
import { SelectUserType } from "./components/SelectUserType/SelectUserType";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="auth" element={<AuthPage />}>
            <Route path="register/type" element={<SelectUserType />} />
            <Route
              path="register/type/:userType"
              element={<RegistrationForm />}
            />
            <Route path="login" element={<LoginPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
