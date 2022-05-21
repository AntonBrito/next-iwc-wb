import react from 'react';
import Image from 'next/image';
import massagebed from '../public/massagebed.jpg';


export default function EventSection(props) {
    return (
       
            // Sen poi flex e ta fika tudo na centro
            // Trokal pa cor d tras-preto
            <div className="bg-gray-800 py-20 px-10">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 flex flex-col max-w-6xl md-flex-row">
                    <div className="md:w-[60%] grow p-3">
                        <h1 className="text-4xl text-gray-200 text-6xl font-bold mb-10">
                        On Site Wellness Services
                        </h1>
                       
                        <p className="text-3xl text-gray-200 font-bold">
                             
                        </p>
                    </div>
                 <div className=' p-3'>  
                     <ul>
                         <li href="#" className="text-gray-400 text-2xl font-bold">Relax with Massage Hydrotherapy</li>
                         <br></br>
                        <li href="#" className="text-gray-400 text-2xl font-bold">Bridal Showers</li>
                        <br></br>
                         <li href="#" className="text-gray-400 text-2xl font-bold">Yoga</li>
                        <br></br>
                        <li href="#" className="text-gray-400 text-2xl font-bold">Company wellness packages</li>
                        <br></br>
                        <li href="#" className="text-gray-400 text-2xl font-bold">Private Events</li>
                     </ul>
                     <br></br>
                    <a href="#Services" className=" bg-orange-300 rounded-md mt-8 py-3 px-4 text-gray-800 text-2xl hover:bg-orange-400">
                        Book Now!
                    </a>
                </div>
                <div className="w-full p-4">
                <Image src={massagebed} alt="Events anoucementes"/>
                </div>
                
            </div>
            </div>
     
       
    );
}