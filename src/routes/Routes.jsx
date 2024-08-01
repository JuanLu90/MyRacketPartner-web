// DEPENDENCES
import React, { Suspense, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../components/Layout/Layout";
import { setUser } from "../redux/slices/authSlice";
// import useDocumentTitle from "../hooks/useDocumentTitle";
import { routesTypes } from "../utils/routesUtil";
// import Loading from "../components/Generic/Loading/Loading";
import { getTokenLocalStorage } from "../utils/apiUtils";

const UserRoutes = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const { token } = useSelector((state) => state.auth);

  const tokenLocal = getTokenLocalStorage();

  // useDocumentTitle(pathname);

  useEffect(() => {
    const fetchUser = async () => {
      if (tokenLocal) {
        await dispatch(setUser(tokenLocal)).unwrap();
      }
    };

    fetchUser();
  }, [dispatch, token, tokenLocal]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Layout>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />

        {Object.entries(routesTypes).map(
          ([path, { component: Component, type }]) => {
            // if (type === "noPrivate" && (token || tokenLocal)) return null;
            // if (type === "private" && !(token || tokenLocal)) return null;

            return (
              <Route
                key={path}
                path={path}
                element={
                  <Suspense fallback={<div> Loading ...</div>}>
                    <Component />
                  </Suspense>
                }
              />
            );
          },
        )}
      </Routes>
    </Layout>
  );
};

export default UserRoutes;
