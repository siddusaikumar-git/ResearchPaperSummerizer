import Card from "../UI/Card";
import classes from "./summaryTile.module.css";

function SummaryTile(props) {
  return (
    <Card>
      <div className={classes.content}>
        <p className={classes.row_name}>Title:</p>
        <p className={classes.title}>{props.title}</p>
        <p className={classes.row_name}>Authors:</p>
        <ul className={classes.list}>
          {props.authors.map((author) => (
            <li key={author}>{author}</li>
          ))}
        </ul>
        <p className={classes.row_name}>Abstract:</p>
        <div className={classes.textContent}>
          <p className={classes.text}>{props.abstract}</p>
          <input className={classes.expand_btn} type="checkbox"></input>
        </div>
        <p className={classes.row_name}>Summary:</p>
        <div className={classes.textContent}>
          <div className={`${classes.text} ${classes.summary}`}>
            <ul>
              {props.summary.map((line) => (
                <li>{line.trim()}</li>
              ))}
            </ul>
          </div>
          <input className={classes.expand_btn} type="checkbox"></input>
        </div>
        <p className={classes.row_name}>Keywords:</p>
        <ul className={classes.list}>
          {props.keywords.map((keyword) => (
            <li key={keyword}>{keyword}</li>
          ))}
        </ul>
        <p className={classes.row_name}>Num Of Pages:</p>
        <p className={classes.title}>{props.pages}</p>
        <a href={props.pdf_link} target="_blank" className={classes.pdf_link}>
          <button className={classes.button}>PDF Link</button>
        </a>
      </div>
    </Card>
  );
}

export default SummaryTile;
