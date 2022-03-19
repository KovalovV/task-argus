import { Status } from "components/status";

import "./styles.scss";

export const Header = () => (
  <header className="header">
    <div className="header__title">
      <span className="header__login">Дооброго дня, &nbsp;</span>
      <div className="header__status">
        Людино №3596941 <Status />
      </div>
    </div>
  </header>
);
