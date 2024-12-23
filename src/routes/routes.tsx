import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page";
import App from "../App";
import ContactForm from "../features/contact-form/contact-form.page";
import Tickets from "src/features/tickets/tickets.page";

export enum pageRoutes {
  FORMULARIO = '/formulario',
  CUPONS = '/cupons',
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
      path: pageRoutes.CUPONS,
      element: (<Tickets />)
    },
    {
      path: '*',
      element: <ErrorPage />
    }
  ]);