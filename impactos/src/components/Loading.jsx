const Loading = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text center">
                <div className="text-center">
                    <h1>Cargando...</h1>
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loading;