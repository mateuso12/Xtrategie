import React from "react";

import {
  Box,
  Button,
  TextField,
  Grid,
  Typography,
  makeStyles,
  Hidden,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store";

import { useForm, Controller } from "react-hook-form";
import { sagaActions, sagaLogin } from "../../saga";

const useStyles = makeStyles((theme) => ({
  loginBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "80vw",
    height: "70vh",
    borderRadius: 5,
    backgroundColor: "#fff",
    padding: theme.spacing(6),
    [theme.breakpoints.down("md")]: {
      height: "90vw",
      marginTop: "1rem",
      margin: theme.spacing(3),
    },
  },

  img: {
    width: "100%",
    height: "100%",
  },

  divider: {
    alignSelf: "stretch",
    height: "60vh",
    width: "4px",
    backgroundColor: theme.palette.primary.main,
  },

  formGroup: {
    gap: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  btn: {
    marginTop: "2rem",
    width: "25rem",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      width: "12rem",
    },
  },

  typography: {
    margin: "1.5rem",
    [theme.typography.h3]: {
      fontSize: "1.2rem",
      "@media (min-width:600px)": {
        fontSize: "1.5rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "2.4rem",
      },
    },
  },
}));

export default function LoginForm() {
  const { control, handleSubmit } = useForm();

  const email = useSelector((state) => state.user.email);
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    if (data.password.length < 8) {
      alert("Senha deve ter mais de 8 caracteres");
      return;
    }
    dispatch({payload:{ email: data.email, password: data.password}, type: sagaActions.SAGA_LOGIN })
    // dispatch(sagaLogin({
    //   email: data.email,
    //   password: data.password
    // }));
  };

  const classes = useStyles();
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box boxShadow={3} className={classes.loginBox}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} md={5}>
          <img
            className={classes.img}
            src="https://www.xtrategie.com.br/wp-content/uploads/2019/08/logo_xtrategie.png"
            alt="Logo com o nome xtrategie"
          />
        </Grid>
        <Grid item md={1}>
          <Hidden smDown>
            <hr className={classes.divider} />
          </Hidden>
        </Grid>
        <Grid item xs={12} md={6}>
          {email ? (
            <Grid item md={12} className={classes.formGroup}>
              <h1>Ola, {email}</h1>

              <Button
                variant="outlined"
                color="secondary"
                size="large"
                onClick={() => dispatch(logout())}
                className={classes.btn}
              >
                LOGOUT
              </Button>
            </Grid>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={classes.formGroup}
            >
              <Typography variant="h5" className={classes.typography}>
                Faça seu login
              </Typography>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    type="email"
                    variant="filled"
                    placeholder="Email"
                    fullWidth={true}
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                )}
                rules={{ required: "Email é obrigatório" }}
              />
              <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    id="filled-adornment-password"
                    variant="filled"
                    type={values.showPassword ? "text" : "password"}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {values.showPassword ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    placeholder="Senha"
                    fullWidth={true}
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                )}
                rules={{ required: "Senha é obrigatória" }}
              />
              <Button
                type="submit"
                variant="outlined"
                color="secondary"
                size="large"
                className={classes.btn}
              >
                ENTRAR
              </Button>
            </form>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
