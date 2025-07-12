import React , {useEffect,useState} from 'react'
import { Users, Mail, Phone, Globe, MapPin, Building } from 'lucide-react'


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
    <div className='main-dashboard min-h-screen w-full bg-gradient-to-br from-purple-900 via-indigo-900 to-fuchsia-900 text-white relative overflow-hidden'>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-violet-400/20 to-purple-400/20 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-white/20 rounded-full animate-ping"></div>
            <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-purple-300/30 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
        </div>

        {/* Header */}
        <div className="relative z-10 pt-8 pb-6">
            <div className="flex items-center justify-center gap-4 mb-4">
                <Users size={48} className="text-purple-300" />
                <h1 className='text-6xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent'>
                    Dashboard
                </h1>
            </div>
            <p className="text-center text-purple-200 text-lg">User Management System</p>
        </div>

        {/* Main Content */}
        <div className='relative z-10 px-6 pb-8'>
            <div className='max-w-7xl mx-auto'>
                {/* Stats Overview */}
                <div className="mb-8">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-2xl font-semibold text-white">Total Users</h3>
                                <p className="text-purple-200">Registered in system</p>
                            </div>
                            <div className="text-4xl font-bold text-purple-300">{data.length}</div>
                        </div>
                    </div>
                </div>

                {/* User Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {data.map((user, index) => (
                        <div 
                            key={user.id} 
                            className='group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25'
                            style={{
                                animationDelay: `${index * 0.1}s`
                            }}
                        >
                            {/* User Avatar */}
                            <div className="flex items-center mb-4">
                                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                                    {user.name.charAt(0)}
                                </div>
                                <div className="ml-4">
                                    <h2 className='text-xl font-semibold text-white group-hover:text-purple-200 transition-colors'>
                                        {user.name}
                                    </h2>
                                    <p className="text-purple-300 text-sm">@{user.username}</p>
                                </div>
                            </div>

                            {/* User Details */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-purple-100">
                                    <Mail size={16} className="text-purple-300" />
                                    <span className="text-sm truncate">{user.email}</span>
                                </div>
                                
                                <div className="flex items-center gap-3 text-purple-100">
                                    <Phone size={16} className="text-purple-300" />
                                    <span className="text-sm">{user.phone}</span>
                                </div>
                                
                                <div className="flex items-center gap-3 text-purple-100">
                                    <Globe size={16} className="text-purple-300" />
                                    <span className="text-sm truncate">{user.website}</span>
                                </div>
                                
                                <div className="flex items-center gap-3 text-purple-100">
                                    <MapPin size={16} className="text-purple-300" />
                                    <span className="text-sm">{user.address.city}</span>
                                </div>
                                
                                <div className="flex items-center gap-3 text-purple-100">
                                    <Building size={16} className="text-purple-300" />
                                    <span className="text-sm">{user.company.name}</span>
                                </div>
                            </div>

                            {/* Action Button */}
                            <div className="mt-6 pt-4 border-t border-white/10">
                                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-2 px-4 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25">
                                    View Profile
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Loading State */}
                {data.length === 0 && (
                    <div className="flex justify-center items-center h-64">
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-12 h-12 border-4 border-purple-300 border-t-transparent rounded-full animate-spin"></div>
                            <p className="text-purple-200">Loading users...</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Dashboard