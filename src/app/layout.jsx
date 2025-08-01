import NavBar from '@/components/shared/navbar'
import Home from '@/app/main/home/page'
import '@/app/global.css'

export default function RootLayout({children}) {
    return (
        <html>
            <body>
                <NavBar/>
                <Home/>
                {children}
            </body>
        </html>
    )
}