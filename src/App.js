
import Routes from './Routes/routes';
import './App.css';
/*import Login from './pages/login/Login.jsx'*/
import React, { useState } from "react";

function App() {
  
  
  const Pagination = ({ totalItems, itemsPerPage, currentPage, setPage }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    
    
    
    
    return (
      <div style={{ marginTop: "1rem" }}>
        <button onClick={() => setPage(currentPage - 1)} disabled={currentPage === 1}>
          ←

        </button>
        <span style={{ margin: "0 1rem" }}>
          Página {currentPage} de {totalPages}
        </span>

        <button onClick={() => setPage(currentPage + 1)} disabled={currentPage === totalPages}>
          →
        </button>
      </div>
    );
  };
  
  const App = () => {
    const data = Array.from({ length: 25 }, (_, i) => `Item ${i + 1}`);
    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);
    
    const start = (currentPage - 1) * itemsPerPage;
    const currentItems = data.slice(start, start + itemsPerPage);
    
    return (
      <div>
        <h2>Lista</h2>
        <ul>
          {currentItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        {/* Componente simples, no mesmo arquivo */}
        <Pagination
          totalItems={data.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          setPage={(page) => setCurrentPage(Math.max(1, Math.min(page, Math.ceil(data.length / itemsPerPage))))}
          />
      </div>
    );
  };
  return (
    <>
      {/*chamar as paginas */}
      {/*<Login/>*/}
      {/* <CadastroFilme/> */}+
      <Routes />
    </>
  );


}

//responsavel para exportar um componente por arquivo
export default App;
