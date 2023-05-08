import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import _ from "lodash";
function Contact() {
  const state = useSelector((state) => state.venues);
  console.log(state);
  const filteredData = _.filter(state, {
    name: "Cozy Ski Chalet",
  });
  console.log(filteredData);
  return <></>;
}

export default Contact;
