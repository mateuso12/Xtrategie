import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  footer:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '2rem'
  }
})

export default function Footer() {
  const classes = useStyles()

  return (
    <>
      <footer className={classes.footer}>
        <strong>	&copy; Software Powered by Xtrategie</strong>
        <strong>2009 - 2022</strong>
      </footer>

    </>
  )
}