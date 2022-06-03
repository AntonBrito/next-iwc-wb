import react from 'react';
import Image from 'next/image';
import massagebed from '../public/massagebed.jpg';


export default function EventSection(props) {
    return (
       
            // Sen poi flex e ta fika tudo na centro
            // Trokal pa cor d tras-preto
        <div className="bg-gray-200 py-20 px-10">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 flex flex-col max-w-8xl md-flex-row">
                <div className="md:w-[60%] grow p-3">
                    <h1 className="text-5xl text-gray-600 font-bold mb-10">
                    Individual & Family Wellness Services
                    </h1>
                    
                    <p className="text-3xl text-gray-400 font-bold">
                            
                    </p>
                </div>
                <div className=' p-3'>  
                    <ul href="#" className="text-gray-400 text-2xl font-bold">Massage Therapy</ul>
                    <br></br>
                    <ul href="#" className="text-gray-400 text-2xl font-bold">Prenatal Massage</ul>
                    <br></br>
                        <ul href="#" className="text-gray-400 text-2xl font-bold">Postpartum Massage</ul>
                    <br></br>
                    <ul href="#" className="text-gray-400 text-2xl font-bold">Post Birth Recovery Treatments</ul>
                    <br></br>
                    <ul href="#" className="text-gray-400 text-2xl font-bold">Alignment based Yoga</ul>
                
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