import dayjs from "dayjs";
import "dayjs/locale/uk";

import { Header } from "components/header";
import { InfoForm } from "components/form";

import "./styles.scss";

dayjs.locale("uk");

export const Root = () => {
  return (
    <div className="container">
      <Header />
      <InfoForm />
    </div>
  );
};
