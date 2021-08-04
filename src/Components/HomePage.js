function HomePage({ logo = "//" }){

    return(
        <>
            <div className="home-page">
                <h1 className="welcome" style= {{ fontSize: "4rem" }}>Welcome to </h1>
                <div className="full-logo">
                    <h1 className="flatiron" style = {{ fontSize: "4rem", margin: 0 }}> <span className="logo">{ logo }</span> FLATIRON </h1>
                    <h1 classname="eats" style = {{ fontSize: "4rem", margin: 0 }}>Eats!</h1>
                </div>

                <p>Food delivery for hungry coders.</p> 
                <a className="button" href="/foods">
                    View All Available Foods to Order
                </a>
            </div>
        </>
    )
}

export default HomePage;