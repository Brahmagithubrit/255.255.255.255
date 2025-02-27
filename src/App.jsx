import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrimarySearchAppBar from "./Components/AppBarTop";
import Profile from "./Components/UserProfile";
import CardList from "./Components/CardList";
import ContactMe from "./Components/ContactMe";
import UpdatePage from "./Components/UpdatePage";
import DashboardLayoutBasic from "./Components/Dashboard";
import SkeletonLoader from "./Components/SkeletonLoader";
import SequenceGame from "./Components/SequenceGame";
import ChessPuzzleGame from "./Components/ChessBoard";
import { RecoilRoot } from "recoil";
import Footer from "./Components/Footer";
import {
  isContactMe,
  isBlog,
  isDashboardOpen,
} from "./Components/Atoms/Recoil";
import TechScroll from "./Components/TechScroll";

function AppContent() {
  const [loading, setLoading] = useState(false);
  

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // });

  if (loading) {
    return <SkeletonLoader />;
  }

  return (
    <>
      <PrimarySearchAppBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Profile />
              <TechScroll />
              <CardList />
              <Footer />
            </>
          }
        />
        <Route path="/dashboard" element={<DashboardLayoutBasic />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/blog" element={<UpdatePage />} />
        {/* <Route path="/cards" element={} /> */}
        <Route path="/sequencegame" element={<SequenceGame />} />
        <Route path="/chessstart" element={<ChessPuzzleGame />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <RecoilRoot>
      <Router>
        <AppContent />
      </Router>
    </RecoilRoot>
  );
}

export default App;
