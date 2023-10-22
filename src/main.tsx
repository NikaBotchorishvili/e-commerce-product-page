import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navigation from "./components/common/Navigation";
import ProductPage from "./pages/Product";
import Error from "./pages/error";

const router = createBrowserRouter([
	{
		element: (
			<>
				<Navigation />
				<Outlet />
			</>
		),
		errorElement: <Error />,
		children: [
			{
				path: "/",
				element: <ProductPage />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
