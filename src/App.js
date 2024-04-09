import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./common/Header";
import {
  toBusines,
  toContact,
  toCyber,
  toIt,
  toOutSours,
  toReferenc,
  toSoft,
  toTeam,
  toWhyWaveHome,
} from "./routs";
import { WhyWaveHome } from "./features/WhyWaveHome";
import { Contact } from "./features/Contact";
import { Referenc } from "./features/Referenc";
import { Busines } from "./features/Services/BusinesConsulting";
import { Cyber } from "./features/Services/CyberSecurity";
import { It } from "./features/Services/ItRecruitment";
import { OutSours } from "./features/Services/Outsourcing";
import { SoftWare } from "./features/Services/SoftwareDevelopment";
import { TeamIt } from "./features/Services/TeamIT";
import { Footer } from "./common/Footer";

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path={toWhyWaveHome()} element={<WhyWaveHome />} />
        <Route path={toContact()} element={<Contact />} />
        <Route path={toReferenc()} element={<Referenc />} />
        <Route path={toBusines()} element={<Busines />} />
        <Route path={toCyber()} element={<Cyber />} />
        <Route path={toIt()} element={<It />} />
        <Route path={toOutSours()} element={<OutSours />} />
        <Route path={toSoft()} element={<SoftWare />} />
        <Route path={toTeam()} element={<TeamIt />} />
        <Route path="/" element={<Navigate to={toWhyWaveHome()} />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
