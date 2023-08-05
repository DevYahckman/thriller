import React from "react";
import Input from "../utils/input";
import {
  BiSolidUser,
  BiCalendar,
  BiSolidPlaneTakeOff,
  BiSolidPlaneLand,
} from "react-icons/bi";
// import { Link } from 'react-router-dom';

function Form(props) {
  return (
    <div>
      <Input
        placeholder="London-All Airports, England, UK"
        type=""
        label="Depart From"
        logo={<BiSolidPlaneTakeOff size={25} />}
      />
      <Input
        placeholder="New York-All Airports, New York, USA"
        type=""
        label="Arrive at"
        logo={<BiSolidPlaneLand size={25} />}
      />
      <Input
        placeholder=""
        type="date"
        label="Depature Date"
        logo={<BiCalendar size={25} />}
      />{" "}
      <Input
        placeholder="New York-All Airports, New York, USA"
        type="date"
        label="Return Date"
        logo={<BiCalendar size={25} />}
      />
      <Input
        placeholder="New York-All Airports, New York, USA"
        type="number"
        label="Passenger"
        logo={<BiSolidUser size={25} />}
      />
      <p className="cursor-pointer bg-primaryColor text-white w-auto px-30 text-center py-3 rounded">
        {" "}
        FIND FLIGHT{" "}
      </p>
    </div>
  );
}

export default Form;
