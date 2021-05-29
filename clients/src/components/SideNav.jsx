import NavItem from "./NavItem";
import "../styles/SideNav.css";
const SideNav = () => {
  return (
    <div className="sidenav">
        
      <ul>
      <h2>SHOPS</h2>
        <NavItem exact to="/shop" name="Sheabuter" />
        <NavItem to="/groundnut" name="Groundnut Paste" />
        <NavItem to="/bags" name="Straw-bags" />
        <NavItem to="/fugu" name="Northern woven Fugu" />
      </ul>
    </div>
  );
};

export default SideNav;
