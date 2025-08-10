import NavBar from '@/components/shared/navbar'
import Home from '@/app/(main)/page'
import Menu from '@/app/(main)/menu/page'
import '@/app/global.css'

export default function HomeLayout({children}) {
    return (
        <html>
            <body>
                <NavBar/>
                <Home/>
                <Menu/>
            </body>
        </html>
    )
}