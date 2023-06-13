import { Button, Grid, Typography } from "@mui/material";
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Actualiza el estado para que el siguiente renderizado muestre la interfaz de fallback.
    return { hasError: true };
  }

  handleGoHomeClick = () => {
    // Lógica para volver al inicio
    window.location.href = "/";
  };

  render() {
    if (this.state.hasError) {      
      return (
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h2">Upps!!</Typography>
            <Typography variant="body">Algo salió mal</Typography>
            <Button variant="contained" onClick={this.handleGoHomeClick}>
              Volver al inicio
            </Button>
          </Grid>          
        </Grid>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
