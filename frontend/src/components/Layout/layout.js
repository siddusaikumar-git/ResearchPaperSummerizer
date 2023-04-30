import Header from "./header";
import classes from "./layout.module.css";

function Layout(props) {
  return (
    <div>
      <Header />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
