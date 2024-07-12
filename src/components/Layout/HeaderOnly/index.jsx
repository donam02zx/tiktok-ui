// import Header from "../components/Header";
import Header from "../components/Header";


function HeaderOnly({children}) {
    return ( 
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default HeaderOnly;