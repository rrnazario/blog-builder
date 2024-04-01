import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page";
import App from "../App";
import ContactForm from "../features/contact-form/contact-form.page";

export enum pageRoutes {
  FORMULARIO = '/formulario',
}

export const router = createBrowserRouter([
    {
      path: "/",
      element: (<App />),
    },
    {
      path: pageRoutes.FORMULARIO,
      element: (<ContactForm />)
    },
    {
      path: '*',
      element: <ErrorPage />
    }
  ]);