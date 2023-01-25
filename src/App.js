// import Header from './components/Header';
// import MainContent from './components/MainContent';
// import Footer from './components/Footer';
import DbcHeader from './components/DbcHeader';
import DbcContent from './components/DbcContent';



export default function App() {
    return  (
        <div className="App">
            <DbcHeader />
            <DbcContent />
            {/* <Footer /> */}
            {/* <h1 className="header">Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was orginally created by Jordan Walke</li>
                <li>Has well over 100k stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul> */}
        </div>  
    )
}