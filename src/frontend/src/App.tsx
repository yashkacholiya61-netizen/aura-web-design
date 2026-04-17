import Layout from "@/components/Layout";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Dashboard from "@/pages/Dashboard";
import Home from "@/pages/Home";
import Portfolio from "@/pages/Portfolio";
import Services from "@/pages/Services";
import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import {
  Outlet,
  RouterProvider,
  createRootRouteWithContext,
  createRoute,
  createRouter,
  redirect,
} from "@tanstack/react-router";
import { useMemo } from "react";

interface RouterContext {
  isAuthenticated: boolean;
}

const rootRoute = createRootRouteWithContext<RouterContext>()({
  component: () => (
    <Layout>
      <Outlet />
    </Layout>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});
const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: Services,
});
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});
const portfolioRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/portfolio",
  component: Portfolio,
});
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: Contact,
});
const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
  component: Dashboard,
  beforeLoad: ({ context }) => {
    if (!context.isAuthenticated) {
      throw redirect({ to: "/" });
    }
  },
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  servicesRoute,
  aboutRoute,
  portfolioRoute,
  contactRoute,
  dashboardRoute,
]);

// Static router for type declaration registration only
const _router = createRouter({
  routeTree,
  context: { isAuthenticated: false },
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof _router;
  }
}

export default function App() {
  const { loginStatus } = useInternetIdentity();
  const isAuthenticated = loginStatus === "success";

  const router = useMemo(
    () =>
      createRouter({
        routeTree,
        context: { isAuthenticated },
      }),
    [isAuthenticated],
  );

  return <RouterProvider router={router} context={{ isAuthenticated }} />;
}
