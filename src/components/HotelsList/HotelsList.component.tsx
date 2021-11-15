import React, { useCallback, useEffect, useRef, useState } from "react";
import Hotel from "../Hotel/Hotel.component";
import { EmptyTitle, Item, List, Tabs } from "./HotelsList.styles";
import { HotelT } from "../../utils/api/types";
import { hasScrollbar } from "../../utils/utils";
import { Order, Predicate, SortRule } from "./HotelsList.types";
import SortTab from "../SortTab/SortTab.component";

type HotelsListProps = {
  dataSource: Array<HotelT>;
  sorts?: Array<SortRule>;
  small?: boolean;
  className?: string;
};

const getPredicateByName = (
  sorts: Array<SortRule> | undefined,
  name: string
) => {
  return sorts?.find((sort) => sort.name === name)?.predicate;
};

const preparedDataSource = (
  dataSource: Array<HotelT>,
  sortFunction?: Predicate<HotelT>,
  order?: Order
) => {
  if (!sortFunction) return dataSource;
  const predicate: Predicate<HotelT> =
    order === "ASC"
      ? (left, right) => sortFunction(left, right)
      : (left, right) => -sortFunction(left, right);
  return [...dataSource].sort(predicate);
};

const HotelsList = ({
  dataSource,
  sorts,
  small = false,
  className,
}: HotelsListProps) => {
  const [activeSortName, setActiveSortName] = useState(
    sorts ? sorts[0].name : ""
  );
  const onTabClick = useCallback(
    (sortName: string) => setActiveSortName(sortName),
    []
  );

  const [sortOrder, setSortOrder] = useState<Order>("ASC");
  const onOrderChange = useCallback((order: Order) => setSortOrder(order), []);

  const list = useRef(null);
  const [scrollable, setScrollable] = useState(hasScrollbar(list.current));

  useEffect(() => {
    setScrollable(hasScrollbar(list.current));
  }, [dataSource]);

  return (
    <>
      {sorts && (
        <Tabs>
          {sorts.map((sort) => (
            <SortTab
              key={sort.name}
              name={sort.name}
              onClick={onTabClick}
              onOrderChange={onOrderChange}
              active={activeSortName === sort.name}
            />
          ))}
        </Tabs>
      )}

      {dataSource.length ? (
        <List className={className} ref={list} hasScrollbar={scrollable}>
          {preparedDataSource(
            dataSource,
            getPredicateByName(sorts, activeSortName),
            sortOrder
          ).map((hotel) => (
            <Item key={hotel.hotelId}>
              <Hotel model={hotel} small={small} />
            </Item>
          ))}
        </List>
      ) : (
        <EmptyTitle>Пусто</EmptyTitle>
      )}
    </>
  );
};

export default HotelsList;
