import react from 'react';


export default function Contact(props) {
    return (
       
            // Sen poi flex e ta fika tudo na centro
            // Trokal pa cor d tras-preto
            <div className="flex bg-gray-800 py-20 px-10 flex-col items-center ">
                <h1 className="text-5xl  text-gray-200 font-bold">
                Get in Touch
                </h1>
               <br></br>
                <div>
                        <ul href="#" className="text-gray-400 text-2xl font-bold underline undeline-offset-5">Interwovencare@gmail.com</ul>
                         <br></br>
                        <ul href="#" className="text-gray-500 text-2xl font-bold underline undeline-offset-5">978.376.8918</ul>
                </div>
            </div>
     
     );
    }
