import { Link } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";
import "./style.scss";
import { iNavitem } from "../../@types/navitem";

interface Props {
  navItem: iNavitem;
}

const HeaderMenuMobile = ({ navItem }: Props) => {
  const { title } = navItem;
  return (
    <li className="headerMenu-list">
      <h4>
        <Link to={title.url}>{title.text}</Link>
      </h4>
      <div className="headerMenu-arrow">
        <BsArrowUpRight />
      </div>
    </li>
  );
};
export default HeaderMenuMobile;
