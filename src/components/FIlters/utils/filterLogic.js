import { useSelector, useDispatch } from "react-redux";
//const dispatch = useDispatch();

export function filterLogic() {
  const state = useSelector((state) => state.filter);
  //console.log(state);
  console.log(state);
  // const filteredData = _.filter(state.venues, (item) => {
  //   return (
  //     item.maxGuests >= 3 &&
  //     item.name.includes("Shelter") &&
  //     item.meta.wifi === false &&
  //     item.meta.parking === false &&
  //     item.meta.breakfast === false &&
  //     item.meta.pets === false
  //   );
  // });
  // console.log(filteredData);
}
