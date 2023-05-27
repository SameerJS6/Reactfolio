import React, { useState } from "react";
import FormsInput from "./components/FormsInput";
import Results from "./components/Results";

export default function App() {
  const [detail, setDetail] = useState({ day: "", month: "", year: "" });
  const [age, setAge] = useState({});
  const [error, setError] = useState({
    showDay: false,
    showMonth: false,
    showYear: false,
    dayMessage: "This field is required",
    monthMessage: "This field is required",
    yearMessage: "This field is required",
  });
  const [complete, setComplete] = useState(true);
  const { day, month, year } = detail;
  const handleSubmit = (e) => {
    e.preventDefault();
    const current = new Date();

    // Error Handling for Days

    if (
      !day ||
      day === "" ||
      parseInt(day, 10) > 31 ||
      parseInt(day, 10) <= 0
    ) {
      setError((prevError) => ({
        ...prevError,
        showDay: true,
        dayMessage: "Must be a valid date",
      }));
    } else {
      setError((prevError) => ({
        ...prevError,
        showDay: false,
      }));
    }

    // Error Handling for Months
    if (
      !month ||
      month === "" ||
      parseInt(month, 10) > 13 ||
      parseInt(month, 10) <= 0
    ) {
      setError((prevError) => ({
        ...prevError,
        showMonth: true,
        monthMessage: "Must be a valid month",
      }));
    } else {
      setError((prevError) => ({ ...prevError, showMonth: false }));
    }

    // Error Handling for Years
    if (!year || year === "" || parseInt(year, 10) > current.getFullYear()) {
      setError((prevError) => ({
        ...prevError,
        showYear: true,
        yearMessage: "Must be in the past",
      }));
    } else if (parseInt(year, 10) < 1000) {
      setError((prevError) => ({
        ...prevError,
        showYear: true,
        yearMessage: "Must greater than 1000",
      }));
    } else {
      setError((prevError) => ({
        ...prevError,
        showYear: false,
      }));
    }

    // Error Handling for showing result
    if (
      !day ||
      day === "" ||
      parseInt(day, 10) > 31 ||
      parseInt(day, 10) <= 0 ||
      !month ||
      month === "" ||
      parseInt(month, 10) > 13 ||
      parseInt(month, 10) <= 0 ||
      !year ||
      year === "" ||
      parseInt(year, 10) > current.getFullYear() ||
      parseInt(year, 10) < 1000 ||
      (parseInt(month, 10) > current.getMonth() &&
        parseInt(year, 10) === current.getFullYear())
    ) {
      setComplete(false);
      setAge({ year: "--", month: "--", day: "--" });
    } else {
      setComplete(true);
      const today = new Date(); //This line creates a new Date() object representing the current date and time.
      const birthDate = new Date(`${month}/${day}/${year}`); //This line creates a new Date() object representing the birth date using the user input values.
      const timeDiff = today.getTime() - birthDate.getTime(); //This line calculates the time difference between the current date and the user input date in milliseconds.
      const ageDate = new Date(timeDiff); //This line creates a new Date using the time calculated in the previous step.
      const years = Math.abs(ageDate.getUTCFullYear() - 1970); //This line calculates the number of years between birth year and current year.
      const months = ageDate.getUTCMonth(); //This line gets the birth month.
      const days = ageDate.getUTCDate() - 1; //This line get the birth date, and subtracting 1 from the result adjust the fact that ageDate represents a duration and not a specific date.
      setAge({ year: years, month: months, day: days });
    }

    setDetail({ day: "", month: "", year: "" });
  };
  return (
    <>
      <main className="fade-in-main mx-4 max-w-xl rounded-s-3xl rounded-ee-[5rem] rounded-se-3xl bg-white px-6 py-8 shadow-sm sm:mx-0 md:rounded-s-3xl md:rounded-ee-[9rem] md:rounded-se-3xl md:pl-8 md:pr-10">
        <div className="grid gap-6">
          <FormsInput
            handleSubmit={handleSubmit}
            error={error}
            detail={detail}
            setDetail={setDetail}
          />

          <Results age={age} />
        </div>
      </main>
    </>
  );
}
