import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import PrimarySearchAppBar from "./Components/AppBarTop";
import Profile from "./Components/UserProfile";
import CardList from "./Components/CardList";
import ContactMe from "./Components/ContactMe";
import UpdatePage from "./Components/UpdatePage";
import { RecoilRoot } from "recoil";

import { isContactMe, isBlog } from "./Components/Atoms/Recoil";

function AppContent() {
  const [contactMe, setContactMe] = useRecoilState(isContactMe);
  const [blog, setBlog] = useRecoilState(isBlog);

  useEffect(() => {
    console.log("contactMe:", contactMe, "blog:", blog); 
  }, [contactMe, blog]);

  return (
    <>
      <PrimarySearchAppBar />
      {blog ? (
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
