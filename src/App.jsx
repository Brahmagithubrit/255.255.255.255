import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import PrimarySearchAppBar from "./Components/AppBarTop";
import Profile from "./Components/UserProfile";
import CardList from "./Components/CardList";
import ContactMe from "./Components/ContactMe";
import UpdatePage from "./Components/UpdatePage";
import DashboardLayoutBasic from "./Components/Dashboard.jsx";
import TemporaryDrawer from "./Components/Drawer.jsx";
import SkeletonLoader from "./Components/SkeletonLoader";
import { RecoilRoot } from "recoil";
import { isContactMe, isBlog, isDrawerOpen, isDashboardOpen } from "./Components/Atoms/Recoil";

function AppContent() {
  const [contactMe, setContactMe] = useRecoilState(isContactMe);
  const [blog, setBlog] = useRecoilState(isBlog);
  const [drawerOpen, setDrawerOpen] = useRecoilState(isDrawerOpen);
  const [open, setOpen] = useRecoilState(isDrawerOpen);
  const [loading, setLoading] = useState(true);
  const [dashboardOpen, setDashboardOpen] = useRecoilState(isDashboardOpen);

  useEffect(() => {
    console.log(
      "contactMe:",
      contactMe,
      "blog:",
      blog,
      "drawerOpen:",
      drawerOpen,
      "dashboardOpen:",
      dashboardOpen
    );
    setTimeout(() => {
      setLoading(false);
    }, 2000); 
  }, [contactMe, blog, open , dashboardOpen]);

  if (loading) {
    return <SkeletonLoader />;
  }

  return (
    <>
      <PrimarySearchAppBar />
      {dashboardOpen ? (
       <DashboardLayoutBasic />
      ): 
        open ? (
        <TemporaryDrawer />
      ) : blog ? (
        <UpdatePage />
      ) : contactMe ? (
        <ContactMe />
      ) : (
        <>
          <Profile />
          <CardList />
        </>
      )}
    </>
  );
}

function App() {
  return (
    <RecoilRoot>
      <AppContent />
    </RecoilRoot>
  );
}

export default App;
