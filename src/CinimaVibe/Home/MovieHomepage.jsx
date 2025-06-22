import { useState } from "react";
import { useLocation } from "react-router-dom";
import MovieList from "./MovieList";
import ActionMovies from "../Explore/ActionMovies";
import AdventureMovies from "../Explore/AdventureMovies";
import FantasyMovies from "../Explore/FantasyMovies";
import AnimationMovies from "../Explore/AnimationMovies";
import HorrorMovies from "../Explore/HorrorMovies";
import RomanceMovies from "../Explore/RomanceMovies";
import ComedyMovies from "../Explore/ComedyMovies";
import SciFicMovies from "../Explore/SciFicMovies";
import FamilyMovies from "../Explore/FamilyMovie";
import Drama from "../Explore/Drama";
import Sidebar from "./Sidebar";

export default function MovieHomepage() {
  const [CurrentView, SetCurrentView] = useState(0);
  const location = useLocation();
  const message = location.state?.message || [];

  const RenderView = () => {
    switch (CurrentView) {
      case 1: return <ActionMovies />;
      case 2: return <AdventureMovies />;
      case 3: return <FantasyMovies />;
      case 4: return <ComedyMovies />;
      case 5: return <SciFicMovies />;
      case 6: return <RomanceMovies />;
      case 7: return <AnimationMovies />;
      case 8: return <HorrorMovies />;
      case 9: return <MovieList />;
      case 10: return <FamilyMovies />;
      case 11: return <Drama />;
      default: return <MovieList />;
    }
  };

  return (
    <div>
      <Sidebar onSelect={SetCurrentView} message={message} />
      <div>{RenderView()}</div>
    </div>
  );
}
