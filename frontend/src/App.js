import React from 'react';


import './global.css';

import Routes from './routes';

//Componente React: É uma funcção que retorna HTML
//JSX: Java Srcipt XML -  Quando o HTML esta escrito dentro do Java Script
//Propriedade: Elas tem a sintaxe do atributo, porém elas são atributos passados para componentes ao invéz de elementos
//Estado: Uma informação que vai ser mantida pelo componente. O estado não pode ser alterado por uma variável comum e sim por um estado
function App() {
  return (
    <Routes />
  );
}

export default App;
