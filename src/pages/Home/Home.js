import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTarea, getUserTareas, saveTarea } from "../../actions/tareas";
import { changeUserEstado, getUsers } from "../../actions/users";
import { CustomLoader } from "../../components/atoms/CustomLoader/CustomLoader";
import { LoggedAdminHome } from "../../components/organisms/LoggedAdminHome/LoggedAdminHome";
import { LoggedUserHome } from "../../components/organisms/LoggedUserHome/LoggedUserHome";
import { NoLoggedUserHome } from "../../components/organisms/NoLoggedUserHome/NoLoggedUserHome";

export const Home = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const { isLoading: loadingTareas, userTareas } = useSelector(
    (state) => state.userTareas
  );
  const {
    isLoading: loadingGetUsers,
    users,
  } = useSelector((state) => state.getUsers);

  const [isAdmin, setIsAdmin] = useState(false);
  const dispatch = useDispatch();

  const handleDeleteTarea = (id) => {
    dispatch(deleteTarea(id));
  };

  const handleSaveTarea = (data, id) => {
    dispatch(
      saveTarea({
        id: id,
        nombre: data.nombre,
        categoria: data.categoria,
        descripcion: data.descripcion,
        fecha: data.fecha,
        estado: data.estado,
        user: data.user,
      })
    );
  };

  const handleChangeEstado = (id, estado) => {
    dispatch(changeUserEstado(id, estado));
  };

  useEffect(() => {
    if (
      currentUser?.roles?.find((item) => item === "ROLE_ADMIN") === "ROLE_ADMIN"
    ) {
      setIsAdmin(true);
    }
  }, [currentUser]);

  useEffect(() => {
    if (currentUser) {
    dispatch(getUsers());
    dispatch(getUserTareas());
    }
  }, [dispatch, currentUser]);


  return loadingGetUsers || loadingTareas ? (
    <CustomLoader size="medium" />
  ) : currentUser ? (
    isAdmin ? (
      <LoggedAdminHome users={users} handleChangeEstado={handleChangeEstado} />
    ) : (
      <LoggedUserHome
        loadingTareas={loadingTareas}
        isAdmin={isAdmin}
        userTareas={userTareas}
        handleDeleteTarea={handleDeleteTarea}
        handleSaveTarea={handleSaveTarea}
        users={users}
      />
    )
  ) : (
    <NoLoggedUserHome />
  );
};
