import classes from "./summary.module.css";
import SummaryTile from "./summaryTile";
import { Fragment, useState } from "react";
import useInput from "../hooks/use-input";
import { ThreeCircles } from "react-loader-spinner";

function Summary() {
  const [summary, setSummary] = useState(null);
  const [spinner, setSpinner] = useState(false);
  const {
    value: enteredTitle,
    isValid: enteredTitleIsValid,
    hasError: titleInputHasError,
    valueInputChangeHandler: titleChangeHandler,
    inputBlurHandler: titleBlurHandler,
    reset: resetTitleInput,
  } = useInput((value) => value.trim() !== "");

  const titleInputClass = titleInputHasError
    ? `${classes.input} ${classes.invalid}`
    : `${classes.input}`;

  const onSubmitHandler = async () => {
    if (!enteredTitleIsValid || titleInputHasError) {
      return;
    }
    setSpinner(true);
    const response = await fetch("http://localhost:5000/api/v1/summary", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        publication_title: enteredTitle,
      }),
    });

    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    setSpinner(false);
    const responseData = await response.json();
    setSummary(responseData);
    resetTitleInput();
  };

  return (
    <Fragment>
      <div className={classes.title}>
        <label htmlFor="title" className={classes.label} />
        <div className={classes.input_div}>
          <input
            type="text"
            id="title"
            onChange={titleChangeHandler}
            onBlur={titleBlurHandler}
            value={enteredTitle}
            className={titleInputClass}
            placeholder="Enter Research Paper title"
            required
          />
        </div>
        <button className={classes.button} onClick={onSubmitHandler}>
          Submit
        </button>
      </div>
      {spinner && (
        <ThreeCircles
          height="100"
          width="100"
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass={classes.spinner}
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
      )}
      {!spinner && summary && (
        <SummaryTile
          key={summary.title}
          title={summary.title}
          pdf_link={summary.research_paper_link}
          authors={summary.authors}
          keywords={summary.keywords}
          abstract={summary.abstract}
          summary={summary.summary}
          file_name={summary.title}
          pages={summary.num_of_pages}
        />
      )}
    </Fragment>
  );
}

export default Summary;
