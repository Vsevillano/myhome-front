import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { GlobalLayout } from "./components/themes/Layouts/GlobalLayout/GlobalLayout";
import { Home } from "./pages/Home/Home";
import { Tareas } from "./pages/Tareas/Tareas";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";

import { Profile } from "./components/organisms/Profile/Profile";
import { ThemeProvider } from "@mui/material/styles";

import { myHomeTheme } from "./styles/theme";
import { ListaCompra } from "./pages/ListaCompra/ListaCompra";
import { NotFound } from "./pages/NotFound/NotFound";
import { Acerca } from "./pages/Acerca/Acerca";
import { Faqs } from "./pages/Faqs/Faqs";
import { Productos } from "./pages/Productos/Productos";
import { EditListaCompra } from "./pages/EditListaCompra/EditListaCompra";
import { ForgotPassword } from "./pages/Forgot/ForgotPassword";
import { NewPassword } from "./pages/NewPassword/NewPassword";

function App() {
  return (
    <ThemeProvider theme={myHomeTheme}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<GlobalLayout />}>
              <Route path="" element={<Home />} />
              <Route path="tareas" element={<Tareas />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="forgotpassword" element={<ForgotPassword />} />
              <Route path="newpassword/:id" element={<NewPassword />} />
              <Route path="profile" element={<Profile />} />
              <Route path="lista" element={<ListaCompra />} />
              <Route path="lista/:id" element={<EditListaCompra />} />
              <Route path="productos" element={<Productos />} />
              <Route path="acerca" element={<Acerca />} />
              <Route path="faqs" element={<Faqs />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
