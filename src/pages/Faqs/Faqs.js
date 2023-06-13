import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid } from "@mui/material";
import { globalStyles } from "../../styles/global.styles";

export const Faqs = () => {
  const globalClases = globalStyles();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography
          variant="h6"
          className={`${globalClases.colorWhite} ${globalClases.textShadowBlack} ${globalClases.fw700} ${globalClases.fs20} ${globalClases.mb10}`}
        >
          Preguntas frequentes
        </Typography>

        <Typography
          variant="h6"
          className={`${globalClases.mb10} ${globalClases.mt10} ${globalClases.fw700} ${globalClases.fs16}`}
        >
          Inicio de sesión / Registro
        </Typography>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>¿Como puedo registrarme?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Debes acceder a la página de inicio de sesión y haz clic en el
              enlace “Registrar”. Completa el formulario de registro y presiona
              el botón “Registrar” para crear una cuenta en MyHome
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              ¿Que pasa si pierdo o no recuerdo mi contraseña?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Si pierdes o no recuerdas tu contraseña, en primer lugar, accede a
              la página de inicio de sesión y haz clic en el enlace contraseña
              puede recuperarla dándole a “¿Has olvidado tu contraseña?”.
              Posteriormente, proporciona la dirección de correo electrónico
              asociada a tu cuenta y se te enviará un correo electrónico con
              instrucciones sobre cómo restablecer tu contraseña. Sigue las
              instrucciones del correo electrónico para restablecer tu
              contraseña y acceder nuevamente a tu cuenta.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              ¿Qué permisos de acceso tengo, administrador o usuario?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Los permisos de acceso pueden variar según la configuración de
              roles y permisos específica de la aplicación. Normalmente, cuando
              te registras por primera vez, se te asigna el rol de usuario
              estándar. Esto significa que tendrás permisos para utilizar las
              funciones y características básicas de la aplicación. Si existe un
              rol de administrador, solo los usuarios designados como
              administradores tendrán permisos adicionales para gestionar
              usuarios, configuraciones avanzadas y realizar acciones
              específicas reservadas para ese rol.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Typography
          variant="h6"
          className={`${globalClases.mb10} ${globalClases.mt10} ${globalClases.fw700} ${globalClases.fs16}`}
        >
          Tareas
        </Typography>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>¿Como puedo crear una tarea?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Para crear una tarea, sigue estos pasos:               
            </Typography>
            <ul>
            <li> Accede a la sección de
              tareas. </li>
              <li> Haz clic en el botón "Crear tarea". </li>
              <li> Completa los
              campos requeridos, como el nombre de la tarea, la descripción, la
              fecha límite, etc. </li>
              <li> Haz clic en el botón "Crear" para agregar la
              tarea a tu lista.</li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>¿Como puedo editar una tarea?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Para editar una tarea existente, sigue estos pasos:               
            </Typography>
            <ul>
            <li> Accede a la
              sección de tareas y busca la tarea que deseas editar. </li>
              <li> Haz clic
              en el un icono de lápiz en la tarea que desees cambiar.</li> 
              <li> Realiza
              los cambios necesarios en los campos que deseas modificar, como el
              nombre, la descripción, la fecha límite, etc. </li>
              <li> Haz clic en el
              botón "Guardar" para guardar los cambios realizados.</li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>¿Como puedo eliminar una tarea?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Para eliminar una tarea, sigue estos pasos: 
            </Typography>
            <ul>
            <li> Accede a la sección
              de tareas y encuentra la tarea que deseas eliminar. </li>
              <li> Haz clic en
              el icono de papelera </li>
              <li> La tarea se eliminará de tu lista de
              tareas.</li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>¿Como puedo asignar a alguien una tarea?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Dependiendo de las funcionalidades específicas de la aplicación,
              puedes asignar una tarea a alguien siguiendo estos pasos:               
            </Typography>
            <ul>
            <li> Accede
              a la sección de tareas y busca la tarea que deseas asignar. </li>
              <li> Haz
              clic en el un icono de lápiz en la tarea que desees cambiar
              Selecciona el usuario al que deseas asignar la tarea de una lista
              de opciones disponibles. </li>
              <li> Guarda los cambios realizados para
              asignar la tarea a esa persona.</li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>¿Qué estados tiene una tarea?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Se pueden encontrar tres tipos de estados: 1. Las tareas
              pendientes son aquellas que aún no se han realizado. 2. Las tareas
              en proceso corresponden a aquellas que se están ejecutando. 3. Las
              tareas finalizadas son las que han sido acabadas, las cuales
              aparecen tachadas en señal de finalización.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Typography
          variant="h6"
          className={`${globalClases.mb10} ${globalClases.mt10} ${globalClases.fw700} ${globalClases.fs16}`}
        >
          Lista de la compra
        </Typography>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>¿Como creo una lista de la compra?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Para crear una lista de la compra, sigue estos pasos: 
            </Typography>
            <ul>
            <li> Accede a
              la sección de listas de la compra. </li>
              <li> Haz clic en el botón "Crear
              lista". </li>
              <li> Asigna un nombre descriptivo a la lista de la compra. </li>
              <li>
              Guarda la lista de la compra para crearla.</li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>¿Como elimino una lista?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Para eliminar una lista de la compra, sigue estos pasos: 
            </Typography>
            <ul>
            <li> Accede
              a la sección de listas de la compra. </li>
              <li> Busca la lista de la compra
              que deseas eliminar.</li> 
              <li> Haz clic en el icono de papelera. </li>
              <li> La
              lista de la compra se eliminará de tu aplicación.</li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              ¿Como puedo añadir/eliminar productos a la lista de la compra?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Para añadir productos a la lista de la compra, sigue estos pasos:                          
            </Typography>
            <ul>
            <li> Accede a la lista de la compra a la que deseas agregar
              productos. </li>
              <li> Haz clic en el icono de forma de lápiz para modificar
              la lista de la compra que desees. </li>
              <li> Añade los productos que deseas
              dándole al botón + de la columna “Productos para añadir”.
              Previamente has de haber guardado y creado el producto para
              añadirlo a la lista de la compra. </li>
              <li> Dale a volver y la lista se
              guarda automáticamente.</li>
            </ul>
          </AccordionDetails>
        </Accordion>

        <Typography
          variant="h6"
          className={`${globalClases.mb10} ${globalClases.mt10} ${globalClases.fw700} ${globalClases.fs16}`}
        >
          Productos
        </Typography>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>¿Como puedo crear productos?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Para crear un producto, sigue estos pasos: 
            </Typography>
            <ul>
            <li> Accede a la sección
              de productos. </li>
              <li> Haz clic en el botón "Crear producto". </li>
              <li> Completa
              el nombre del producto. </li>
              <li> Guarda el producto para crearlo en tu
              lista de productos.</li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>¿Como puedo eliminar un producto?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Para eliminar un producto, sigue estos pasos: 
            </Typography>
            <ul>
            <li> Accede a la
              sección de productos. </li>
              <li> Busca el producto que deseas eliminar. </li>
              <li>
              Busca una opción de eliminación, como un icono de papelera. </li>
              <li> El
              producto se eliminará de tu lista de productos.</li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              ¿Como puedo modificar el nombre de los productos?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Para modificar el nombre de un producto, sigue estos pasos:             
            </Typography>
            <ul>
            <li>
              Accede a la sección de productos. </li>
              <li> Busca el producto cuyo nombre
              deseas modificar. </li>
              <li> Haz clic en el icono de lápiz . </li>
              <li> Edita el
              campo del nombre del producto con el nuevo nombre deseado.</li> 
              <li>
              Guarda los cambios realizados para actualizar el nombre del
              producto.</li>
            </ul>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  );
};
