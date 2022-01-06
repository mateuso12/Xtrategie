import { makeStyles } from "@material-ui/core";
import Footer from "../Footer";
import LoginForm from "../LoginForm";

export const useStyles = makeStyles((theme) =>({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: theme.palette.primary.main,
    height: '100vh'
  }
}))

export default function Home() {
  const classes = useStyles()
  
  return (
    <div className={classes.root}>
      <LoginForm />
      <Footer />
    </div>
  )
}