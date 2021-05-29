import { Link } from "react-router-dom";
import "../styles/Shop.css";
const ShopHome = () => {
  return (
    <div>
      <ul className="shop1">
        <Link to="/butter">
          <li className="shea">Sheabutter</li>
        </Link>
        <Link to="/groundnut">
          <li className="nut">Groundnut paste</li>
        </Link>
        <Link to="/bags">
          <li className="bags">Straw-bags</li>
        </Link>
        <Link to="/fugu">
          <li className="fugu">Northern Woven fugu</li>
        </Link>
      </ul>
    </div>
  );
};

export default ShopHome;
