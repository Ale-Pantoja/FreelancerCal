# Calculadora Freelancer & Payment Tracker

![Status](https://img.shields.io/badge/Status-En%20desarrollo-orange?style=for-the-badge)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

![Vista previa de la Calculadora](./assets/Preview-CalcFreelancer.jpg)

Una herramienta profesional diseñada para freelancers y profesionales independientes que necesitan gestionar sus ingresos internacionales con precisión. Esta aplicación permite calcular las comisiones reales de plataformas como PayPal, Binance P2P y Payoneer de forma instantánea.

---

## Estado del Proyecto: En Desarrollo

Este proyecto se encuentra actualmente en su **Fase 1 (Cálculo de Tarifas y Pasarelas)**. Estoy iterando constantemente para añadir nuevas funcionalidades de gestión financiera.

---

## Tecnologías Utilizadas

- **React 18**: Biblioteca principal para la construcción de interfaces declarativas.
- **TypeScript**: Para garantizar la integridad de los datos y facilitar el mantenimiento del código.
- **Tailwind CSS**: Framework de utilidades CSS para un diseño moderno, rápido y responsivo.
- **Vite**: Tooling de siguiente generación para un entorno de desarrollo ultra veloz.

---

## Estructura del Proyecto

El proyecto sigue una organización limpia basada en la separación de responsabilidades:

```text
src/
├── components/
│   ├── calculatorFreelancer/    | Módulo de cálculo de tarifa por hora funcional
│   │   ├── CalculatorFreelancer.tsx | Componente contenedor (Cerebro)
│   │   ├── FormFreelancer.tsx       | Formulario manual con flujo explícito de datos
│   │   ├── ResultFreelancer.tsx     | Renderizador visual de resultados
│   │   └── index.ts                 | Archivo barril para importaciones limpias
│   ├── calculatorPayment/       | Módulo de comisiones de pasarelas de pago
│   │   ├── CalculatorPayment.tsx    | Lógica de cálculo e inversión de comisiones
│   │   ├── FormPayment.tsx          | Selector dinámico de plataformas e inputs
│   │   ├── ResultPayment.tsx        | Visualización detallada de deducciones y neto
│   │   └── index.ts                 | Archivo barril de pasarelas
├── Platforms.ts                 | Tasas de comisiones y datos maestros
├── App.tsx
└── main.tsx
```

## Conceptos de React Aplicados

Para este proyecto, he implementado patrones fundamentales de React que aseguran un código limpio y mantenible:

- **Lifting State Up (Levantamiento de Estado):** Centralización del estado en el componente padre (`CalculatorPayment`) para sincronizar la entrada de datos del formulario con los resultados en tiempo real.
- **Comunicación mediante Props:** Uso de un flujo de datos unidireccional y eficiente para pasar información y funciones entre componentes.
- **Programación Funcional:** Aplicación de métodos modernos como `.map()` y `Object.values()` para renderizar interfaces dinámicas basadas en objetos de datos.
- **Interfaces de TypeScript:** Definición de contratos estrictos para asegurar que cada componente reciba exactamente los datos que necesita, reduciendo errores en tiempo de ejecución.

---

## Instalación y Configuración Local

Si deseas clonar este proyecto y ejecutarlo en tu máquina:

1.  **Clonar el repositorio:**

    ```bash
    git clone [https://github.com/tu-usuario/nombre-de-tu-repo.git](https://github.com/tu-usuario/nombre-de-tu-repo.git)
    ```

2.  **Instalar las dependencias:**

    ```bash
    npm install
    ```

3.  **Iniciar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

---

Este proyecto es una pieza clave de mi portafolio como **Ingeniera de Software en formación**. Mi enfoque principal es resolver problemas del mundo real mediante la creación de herramientas digitales que combinen una lógica sólida con una experiencia de usuario excepcional. Cualquier aporte o recomendacion es bienvenido

---
