import react from 'react';
import Image from 'next/image';
import massagebed from '../public/massagebed.jpg';


export default function EventSection(props) {
    return (
       
            // Sen poi flex e ta fika tudo na centro
            // Trokal pa cor d tras-preto
            <div className="bg-gray-800 py-20 px-10">
                <div className="grid grid-cols-2 flex flex-col max-w-6xl md-flex-row">
                    <div className="md:w-[60%] grow p-4">
                        <h1 className="text-4xl text-gray-200 text-6xl font-bold mb-10">
                            Events  
                        </h1>
                       
                        <p className="text-3xl text-gray-200 font-bold">
                             On Site Wellness Services
                        </p>
                    </div>
                <div className="w-full p-4">
                <Image src={massagebed} alt="Events anoucementes"/>
                </div>
            </div>
            </div>
     
       
    );
}