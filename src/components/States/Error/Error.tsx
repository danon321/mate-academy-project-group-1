import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import './error.scss';

export const Error = () => {
  // wykrzyknik = &#10071;
  // stop = &#9940;
  return (
    <div className="container">
      <div className='error'>
        <div className="error-container">
          <ReportGmailerrorredIcon sx={{ color: '#d50000', fontSize: 240 }} />
          <h3 className="error-description">Coś poszło nie tak.</h3>
        </div>
      </div>
    </div>
  );
};
