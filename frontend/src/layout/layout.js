import Banner from'../banner';

const Layout =({ children }) => {

    return(
        <>
             <Banner />
        
             <main>
               {children}
             </main>

        </>
    )

}

export default Layout