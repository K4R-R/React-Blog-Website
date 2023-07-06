import {Link} from 'react-router-dom';
const NotFound = () => {
   return ( 
      <div className="not-found">
         <h1>ERROR 404</h1>
         <h2>Page cannot be found</h2>
         <Link to="/">Go back to home page</Link>
      </div>
    );
}
 
export default NotFound;