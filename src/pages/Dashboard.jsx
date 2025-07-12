import React , {useEffect,useState} from 'react'

const Dashboard = () => {
    const [data, setData] = useState([]);
    //fetching data from JSON Placeholder API
    useEffect(()=>{
      async function fetchData() {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/users');
          const result = await response.json();
          setData(result);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
        fetchData();
    },[])
  return (
    <div className='main-dashboard min-h-screen min-w-screen flex flex-col justify-center gap-2.5 items-center bg-gradient-to-br from-purple-900 via-black to-fuchsia-900 text-white'>
        <h1 className='text-6xl text-center pt-2 font-bold'>Dashboard</h1>
        <div className='w-[95%] h-[90%] bg-white/60 rounded-2xl'>
        {data.map((user) => (
            <div key={user.id} className='p-4 border-b border-gray-200'>
                <h2 className='text-2xl font-semibold'>{user.name}</h2>
                <p className='text-gray-700'>{user.email}</p>   
                <p className='text-gray-700'>{user.phone}</p>
                <p className='text-gray-700'>{user.website}</p>
                <p className='text-gray-700'>{user.address.city}, {user.address.street}</p>
                

        </div>
        ))}

    </div>
    </div>
  )
}

export default Dashboard