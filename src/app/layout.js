import './globals.css';


export const metadata = {
    title: 'Quizick',
    description: 'A quiz application',
}

export default function RootLayout({ children }) {
return (
    <html lang="en">
        <body className="">{children}</body>
    </html>
)
}
