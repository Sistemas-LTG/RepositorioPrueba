import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MisPacientes from "../screens/MisPacientes/MisPacientes";
import DetallePaciente from "../screens/MisPacientes/DetallePaciente";
import DetalleFolio from "../screens/MisPacientes/DetalleFolio";
import DetalleFolioPDF from "../screens/MisPacientes/DetalleFolioPDF";
import DetalleEstudio from "../screens/MisPacientes/DetalleEstudio";
import DetalleVariable from "../screens/MisPacientes/DetalleVariable";
import DetalleVariableGrafica from "../screens/MisPacientes/DetalleVariableGrafica";
import CitasPendientes from "../screens/MisPacientes/CitasPendientes";


const Stack = createStackNavigator();

export default function PuntosStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="misPacientes"
        component={MisPacientes}
        options={{ title: "Mis Pacientes" ,headerLeft: null}}
      />
      <Stack.Screen
        name="detallePaciente"
        component={DetallePaciente}
        options={{ title: "Detalle Paciente" }}
      />
       <Stack.Screen
        name="detalleFolio"
        component={DetalleFolio}
        options={{ title: "Detalle Folio" }}
      />
       <Stack.Screen
        name="detalleFolioPDF"
        component={DetalleFolioPDF}
        options={{ title: "Detalle Folio PDF" }}
      />
      <Stack.Screen
        name="detalleEstudio"
        component={DetalleEstudio}
        options={{ title: "Detalle Estudio" }}
      />
       <Stack.Screen
        name="detalleVariable"
        component={DetalleVariable}
        options={{ title: "Detalle Variable" }}
      />
       <Stack.Screen
        name="detalleVariableGrafica"
        component={DetalleVariableGrafica}
        options={{ title: "Detalle Variable Grafica" }}
      />
       <Stack.Screen
        name="citasPendientes"
        component={CitasPendientes}
        options={{ title: "Citas Pendientes" }}
      />
    </Stack.Navigator>
  );
}
