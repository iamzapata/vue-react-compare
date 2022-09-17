## Estado Jerarquizado

![alt](./react-state.png)

Uno puede pasar el estado como propiedades (props en react y vue) a los componentes hijos, pero esto solo es recomendable hasta cierto punto, por ejemplo, una jerarquía de componentes de 3 niveles, como máximo. Si se requiere pasar el estado a componentes más profundos, un etado global es una mejor opción. Cuando pasamos un prop de un componente a otro componente más abajo, y este a su vez a otro más abajo, se conoce como [prop drilling](https://frontend.adaitw.org/docs/react/react23).

### React

En React, se crean etsados locales usando el hook `useState`. Este estado se puede pasar a otros componentes más abajo, pero no a componentes por fuera de su jerarquía.

Dentro de un componente padre, como  `<App />`, se crea el estado, y se pasa como propiedades a los componentes hijos, como `<ComponenteHijoReact />` en el siguiente ejemplo.

```js
// App.js
const [contador, setCount] = useState
... 
<ComponenteHijoReact contador={contador} setCount={setCount} />
```

Dentro de `<ComponenteHijoReact />` se puede actualizar el estado de `<App />`, usando el prop `setCount`, y este componente a su vez puede compoartir el estado a componentes más abajo:.

```js
export function ComponenteHijoReact({contador, setCount}) {
  return (
    <div>
      <p>Count: {contador}</p>
      <button onClick={() => setCount(contador + 1)}>Increment</button>
      <AnotherComponent contador={contador} />
    </div>
  )
}
```

Tanto el estado, `contador`, como la función para actualizar el estado, `setCount`, se pasan como propiedades a componente hijo, y al componente del hijo, y así sucesivamente. De esta manera se puede compartir un estado entre un padre y sus hijos.

Un problema de compartir estado de esta manera es que requiere que se declaren
explícitamente las propiedades que se pasan a los componentes hijos. Si tengo un componente
Padre: `<Padre />` y dentro del arbol de `<Padre />` existe un componente `<Hijo />` que requiere el estado, este estado tiene que pasar por todo los ancestros de `<Hijo />`.

```bash
<Padre />
├─ <ComponenteUno />
│  ├─ <ComponenteDos />
│  │  ├─ <ComponenteTres />
│  │  │  ├─ <Hijo />
```

Otro problema es que si se requiere pasar el estado a un componente `<OtroHijo />` que no es hijo de `<App />`, no es posible por metodos convencionales.

```bash
<Padre />/
├─ <ComponenteUno />/
│  ├─ <ComponenteDos />/
│  │  ├─ <ComponenteTres />/
│  │  │  ├─ <Hijo />/
<Hermano />/
├─ <OtroHijo />/
```

### Vue

En vue también se puede compartir estado local, usando refs, que son valores mutables:

```js
import { ref } from 'vue'

const contador = ref(0)

const incrementarContador = () => {
  contador.value++
}
...
<ComponenteHijoVue :contador=contador :incrementarContador=incrementarContador />
```

Dentro de `<ComponenteHijoVue />` se puede actualizar el estado de `<App />` a través de la propiedad `incrementarContador` y pasar el estado a componentes más abajo:

```js
defineProps<{ contador: number, incrementarContador: () => void }>()

</script>

<template>
 <div>Child Component
    <div> {{contador}}</div>
    <button @click="incrementarContador">
      Increment  contador
    </button>
    <AnotherComponent :contador=contador />
  </div>
 
</template>
```

Los problemas que se mencionaron para React también se aplican a Vue ya que ambos tienen una jerarquía de componentes.

### Vue/React

Se puede pensar en los componentes como si fueran funciones simples, y el estado como si fuera un argumento en esas funciones. En el siguiente ejemplo, las funciones `Hijo`, `Nieto`, `Bisnieto` están declaradas por fuera de `App`, entonces para que puedan acceder a `contador` tienen que recibirlo como argumento.

```js
function Hijo(contador, incrementarContador) {
  console.log(contador.valorActual) // 0

  incrementarContador()
  Nieto(contador, incrementarContador)
}

function Nieto(contador, incrementarContador) {
  console.log(contador.valorActual) // 1

  incrementarContador()
  Biznieto(contador, incrementarContador)
}

function Bisnieto(contador, incrementarContador) {
  console.log(contador.valorActual) // 2

  incrementarContador()
}

function App() {

  let contador = {
    valorActual: 0
  };

  function incrementarContador() {
    contador.valorActual++
  }

  Hijo(contador, incrementarContador);

  console.log(contador.valorActual) // 3
}
App();
```

## Estado Global

Este tipo de estados no requieren de un componente padre, y pueden ser usados en cualquier parte de la aplicación.

![alt](./global-state.png)

### React

En el ecosistema de React, existen muchas opciones de estado global. Algunas son [Redux](https://redux.js.org/), [zustand](https://github.com/pmndrs/zustand), [jotai](https://jotai.org/), [recoil](https://recoiljs.org/), y el propio [Context API](https://reactjs.org/docs/context.html) de React.

Con una libreria como estas, se puede crear un estado centralizado, y compartirlo entre componentes sin tener que pasar el estado a través props.

En este repo se puede ver un ejemplo de como usar Jotai con React: [App.js](./react/src/App.tsx)

Para verlo entrar a la carpeta `react/`,  ejecutar `yarn install` y `yarn dev`.

Este ejemplo de react, se genera un arbol de componentes como el siguiente:

![alt](./react-tree.png)

Los componentes `<GlobalComponent />`, `<GlobalState/>`, `<ComponentOne />`, y `<ComponentTwo />` acceden a un mismo estado global, usando `jotai`, sin recibir el estado como propiedades.

### Vue

Vue viene con una solución de estado global, se llama `reactive`. También hay otroas opciones
como [Vuex](https://vuex.vuejs.org/), y [Pinia](https://pinia.vuejs.org/).

En este repo también se puede ver un ejemplo de un estado global: [App.vue](./vue/src/App.vue)

Para verlo entrar a la carpeta `vue/`,  ejecutar `yarn install` y `yarn dev`.

Este ejemplo de vue, se genera arbol de componentes como el siguiente:

![alt](./vue-tree.png)

Los componentes `<GlobalComponent />`, `<GlobalState/>`, `<ComponentOne />`, y `<ComponentTwo />` acceden a un mismo estado global, usando `reactive`, sin pasar el estado como propiedades usando.

Para crear un estado global, usando `reactive`, podemos hacer lo siguiente:

```js
// store.js
import { reactive } from "vue";

export const store = reactive({
  contador: 0,
});
```

En algun componente:

```js
import { store } from "./store";

const incrementarContador = () => {
  store.contador++;
};
```

Cualquier componente que este leyendo de `store`, se actualizará cuando el estado cambie.

### Como saber que tipo de estado usar?

#### React

- Si el estado es compartido entre una jerarquia pequeña de componentes, de 3 niveles por ejemplo, un estado compartido a traves de props está bien, `useState` o `useReducer` son buenas opciones.
  
- Si el estado es compartido entre una jerarquia grande de componentes, o se necesita compartir el estado entre componentes que no estan relacionados, usar un estado global.`jotai`,  `Context API`, `Redux`, `zustand`, y `recoil` son buenas opciones. Siendo la primera de las opciones la más simple.

#### Vue

- Si el estado es compartido entre una jerarquia pequeña de componentes, compartir el el estado con props. Para reactividad, usar `ref`

- Si el estado debe compartirse entre una jerarquia grande de componentes, o se necesita compartir el estado entre componentes que no estan relacionados, usar un estado global. `reactive`, `Vuex`, y `Pinia` son buenas opciones. Siendo `reactive` la más simple, pero `Pinia` la más recomendada.

#### Vue

### Ejemplos

Este repositorio contiene ejemplos de como usar estado local y global en React y Vue.

En ambos directorios, `react/` y `vue/`, se puede poner a correr cada proyecto con:

 ```bash
 yarn install
 ```

```bash
yarn dev
```

#### react

```bash
├── App.tsx
└── components
    ├── Global
    │   ├── Button.tsx
    │   ├── ComponentOne.tsx
    │   ├── ComponentTwo.tsx
    │   ├── GlobalComponent.tsx
    │   ├── GlobalState.tsx
    │   └── store.ts
    └── Local
        ├── Button.tsx
        ├── ChildOne.tsx
        ├── ChildTwo.tsx
        └── LocalState.tsx
```

Dentro del directorio `Global/`, el archivo `store.ts` contiene un ejemplo de un estado global, usando librería [`jotai`](https://jotai.org/).

`<GlobalState />`, `<ComponentOne />`, `<ComponentTwo />`, y `<GlobalComponent />` consumen este estado global. Leen y escriben sobre mismo valor.

Los copmponentes dentro del directorio `Local/`, reciben props del estado creado en `<App />` y lo mutan a través de otro prop que tambien reciben. Con este tipo de estado, cada consumidor require que el estado y una función para alterar el estado sean pasadas como props.

#### vue

```bash
├── App.vue
└── components
    ├── Global
    │   ├── Button.vue
    │   ├── ComponentOne.vue
    │   ├── ComponentTwo.vue
    │   ├── GlobalComponent.vue
    │   ├── GlobalState.vue
    │   └── store.ts
    └── Local
        ├── Button.vue
        ├── ChildOne.vue
        ├── ChildTwo.vue
        └── LocalState.vue
```

Dentro del directorio `Global/`, el archivo `store.ts` contiene un ejemplo de un estado global, usando la funcion [`reactive`](https://v3.vuejs.org/guide/reactivity-fundamentals.html#reactive) de `vue`.

`<GlobalState />`, `<ComponentOne />`, `<ComponentTwo />`, y `<GlobalComponent />` consumente este estado global sin necesidad de recibir el estado como props de un componente padre. Por otro lado, los componentes dentro de `Local`, como `<ChildOne />` y `<ChildTwo />` reciben el estado como props, y lo pueden mutar usando otro prop.
