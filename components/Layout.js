
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Layout({ children }) {
    return  (
        <div class="relative min-h-screen flex flex-col bg-black">
            <Navbar />
            <div className="flex flex-col">
            <main className="flex-1">
                {children}
            </main>
            <Footer />
        </div>
        </div>
    )
}

