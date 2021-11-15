import React, { useCallback, useState } from "react";
import { Arrows, ArrowWrapper, Tab } from "./SortTab.styles";
import { ReactComponent as Arrow } from "../../images/arrow-select.svg";
import { Order } from "../HotelsList/HotelsList.types";

type SortTabProps = {
  name: string;
  onClick: (s: string, o: Order) => void;
  onOrderChange: (o: Order) => void;
  active: boolean;
};

const SortTab = ({ name, active, onClick, onOrderChange }: SortTabProps) => {
  const [order, setOrder] = useState<Order>("ASC");

  const handleClick = useCallback(() => {
    setOrder((order) => (order === "ASC" ? "DESC" : "ASC"));
    onOrderChange(order);
    onClick(name, order);
  }, [name, order, onClick, onOrderChange]);

  return (
    <Tab active={active} order={order} onClick={handleClick}>
      {name}
      <Arrows>
        <ArrowWrapper>
          <Arrow />
        </ArrowWrapper>

        <ArrowWrapper down={true}>
          <Arrow />
        </ArrowWrapper>
      </Arrows>
    </Tab>
  );
};

export default SortTab;
