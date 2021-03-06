import react from 'react';
import Image from 'next/image';
import contemple from '../public/contemple.jpg';


export default function ServeiceEventSection(props) {
    return (
       
        
            <div className="bg-gray-800 py-20 px-10">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 flex flex-col max-w-8xl md-flex-row">
                    <div className="md:w-[60%] grow p-3">
                        <h1 className="text-5xl text-gray-400 font-bold mb-10">
                        On Site Wellness Services 
                        </h1>
                        <h2 className="text-4xl text-gray-100 font-bold mb-10">
                        Relax with Massage & Hydrotherapy
                        </h2>
                        <p className="text-3xl text-gray-200 font-bold">
                             
                        </p>
                    </div>
                    <div className="w-full p-4">
                    <Image src={contemple} alt="Events anoucementes"/>
                    </div>
                 <div className='flex items-center p-3 '>  
                 <div className=' p-6 float-right items-center'>
                        <h1 className="text-3xl text-gray-200 font-bold mb-10">Private Events:</h1>
                    
                        <ul href="#" className="text-gray-400 text-2xl font-bold">Bridal Showers</ul>
                        <br></br>
                         <ul href="#" className="text-gray-400 text-2xl font-bold">Baby Showers</ul>
                        <br></br>
                        <ul href="#" className="text-gray-400 text-2xl font-bold">Blessing Ways</ul>
                        <br></br>
                        <ul href="#" className="text-gray-400 text-2xl font-bold">Support Groups</ul>
                    
                     <br></br>
                     <br></br>
                    {/* <a href="#Services" className=" bg-orange-300 rounded-md mt-8 py-3 px-4 text-gray-800 text-2xl hover:bg-orange-400">
                        Book Now!
                    </a> */}
                    </div>
                </div>
                
            </div>
            </div>
     
       
    );
}