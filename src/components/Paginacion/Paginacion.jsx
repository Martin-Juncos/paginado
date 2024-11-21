import styles from "./Paginacion.module.css";
/* eslint-disable react/prop-types */
function Paginacion({
  productosPorPagina,
  paginaActual,
  setPaginaActual,
  totalDeProductos,
}) {
  const numeroDePagina = [];
  for (let i = 0; i < Math.ceil(totalDeProductos / productosPorPagina); i++) {
    numeroDePagina.push(i + 1);
  }
  const prevPage = () => {
    setPaginaActual(paginaActual - 1);
  };
  const nextPage = () => {
    setPaginaActual(paginaActual + 1);
  };
  const currPage = (num) => {
    setPaginaActual(num);
  };
  return (
    <div className={styles.button}>
      {paginaActual === 1 ? null : <button onClick={prevPage}>Prev</button>}

      {numeroDePagina.map((num) => (
        <button
          className={paginaActual === num ? styles.currPage : null}
          onClick={() => currPage(num)}
          key={num}
        >
          {num}
        </button>
      ))}

      {paginaActual === numeroDePagina.length ? null : (
        <button onClick={nextPage}>Next</button>
      )}
    </div>
  );
}

export default Paginacion;
