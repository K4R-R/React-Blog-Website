import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
   const { data:blogs,isPending,error } =useFetch('http://localhost:8000/blogs');

   //{ blogs.map( (i) => (func) ) }
   return ( 
      <div className="home">
         { error && <div>{error}</div> }
         { isPending && <div>Loading...</div> }
         {blogs && <BlogList BLOGS={blogs} title='All Blogs!'/>}
      </div>
    );
}
 
export default Home;

//buttons Practice

// let colour='white';
//    let i=1;
//    const [name,setName]=useState('Karan');
//    const handleClick = (name) => {
//       console.log('hello ' + name + ' ' + i);
//       i++;
//    }
//    return ( 
//       <div className="home">
//          <h2>Homepage</h2>
//          <h3>{name}</h3>
//          <button onClick={()=>handleClick('karan')} style={{
//                color:colour,
//                margin: '10px',
//                backgroundColor:'#f1356d',
//                border:'none',
//                height: '30px',
//                width: '100px',
//                borderRadius:'6px'
//             }}>Click me</button>
//          <button onClick={()=>{
//             setName('Void');
//          }} style={{
//                color:colour,
//                margin: '10px',
//                backgroundColor:'#f1356d',
//                border:'none',
//                height: '30px',
//                width: '150px',
//                borderRadius:'6px'
//             }}>Change Name</button>
//       </div>
//     );