import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navigation from "./components/common/Navigation/Navigation";
import ProductPage from "./pages/Product";
import Error from "./pages/error";
import { Provider } from "react-redux";
import { store } from "./redux/shoppingCart/store";

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
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
