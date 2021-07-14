import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AgregarPacientes from "../screens/AgregarPacientes/AgregarPacientes";
import PacienteAgregado from "../screens/AgregarPacientes/PacienteAgregado";

const Stack = createStackNavigator();

export default function AgregarPacientesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="agregarPaciente"
        component={AgregarPacientes}
        options={{ title: "Agregar Pacientes" ,headerLeft: null}}
      />
      <Stack.Screen
        name="pacienteAgregado"
        component={PacienteAgregado}
        options={{ title: "Paciente Agregado" }}
      />
    </Stack.Navigator>
  );
}
