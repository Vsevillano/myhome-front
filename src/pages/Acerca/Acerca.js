import { Grid, Typography } from "@mui/material";
import React from "react";
import { globalStyles } from "../../styles/global.styles";

export const Acerca = () => {
  const globalClases = globalStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography
          variant="h6"
          className={`${globalClases.colorWhite} ${globalClases.textShadowBlack} ${globalClases.fw700} ${globalClases.fs20} ${globalClases.mb10}`}
        >
          Acerca de
        </Typography>

        <Typography className={globalClases.mb10}>
          Este proyecto nace por la visualización de un problema social en la
          convivencia entre miembros de un hogar, donde se generan entornos
          conflictivos, como por ejemplo ¿quién le tocaba fregar los platos? ¡
          Me olvidé de la sal en el supermercado!... Todo ello es debido a una
          mala gestión por parte de las personas que habitan en una misma
          vivienda. Estas desavenencias provocan situaciones caóticas y
          estresantes en la convivencia, por ende, es necesario en la sociedad
          una aplicación que permita ayudar y facilitar la vida familiar. Por
          esta razón, se busca crear una aplicación prototipo funcional que
          ayude en la organización de la vida hogareña de los usuarios,
          cubriendo la necesidad latente en el mercado. Es cierto que existe una
          oferta similar en el mercado de aplicaciones con esta misma
          funcionalidad, sin embargo, estas presentan muchos errores que no se
          solucionan a largo plazo y no contemplan muchas funciones operativas
          que se solventan en este proyecto, dando lugar a que el usuario no
          cumpla sus expectativas con respecto a la app. Estas afirmaciones se
          basan en la experiencia contemplada por los usuarios en los
          comentarios de los perfiles de cada una de estas apps.
        </Typography>
      </Grid>
    </Grid>
  );
};
