import react from 'react';


export default function HeaderSection(props) {
    return (
       
            // Sen poi flex e ta fika tudo na centro
            // Trokal pa cor d tras-preto
            <div className="flex bg-gray-200 py-20 px-10 flex-col items-center ">
                <h1 className="text-5xl  text-gray-600 font-bold">
                Interwoven Care  
                </h1>
               <br></br>
                <p className="text-3xl text-gray-500 fonte-bold">
                    Full Spectrum Doula & Perinatal Massage Therapist
                </p>
                <br></br>
                {/* <a href="#Services" className=" bg-orange-300 rounded-md mt-8 py-3 px-4 text-gray-800 text-2xl hover:bg-orange-400">
                    Services
                </a> */}
            </div>
     
       
    );
}