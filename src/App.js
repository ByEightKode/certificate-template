
import 'minireset.css';
import './App.css';

function App({name, course, date, cert_id}) {
  return (
    <div className="App">
      <img src='https://phcetstudentportal.mes.ac.in/Login/images/MESLogo.png' />
      <p className="byline">Certificate of completion</p>

      <div className="content">
        <p>Awarded to</p>
        <h1>{name}</h1>
        <p>for completing:</p>
        <h2>{course}</h2>
      </div>

      {date && (
        <p className="date">
          Issued on{' '}
          <span className="bold">{date}</span>
        </p>
      )}

      <p className="Id">
        Certificate ID - <span className="bold">{cert_id}</span>
      </p>
    </div>
  );
}

App.defaultProps = {
  name : 'Name Surname',
  course : 'Creating Dapps using IPFS & Blockchain',
  date : 'March 22 2022',
  cert_id : 'AbcDEfgHIjK'
};


export default App;
