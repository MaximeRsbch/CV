function portfolio() {
    return (
        <section>
            <div className="bg-gray-600">
                <div className="">
                    <h1 className="text-white text-5xl pt-24 text-center">
                        Portfolio
                    </h1>
                    <p className="text-white text-3xl text-center">
                        Mes dernières création
                    </p>
                    <div className="pt-10 px-4 pb-10">
                        <img
                            className="w-full"
                            src="assets/img/nunu.jpg"
                            alt=""
                        />
                        <img
                            className="w-full"
                            src="assets/img/louna.jpg"
                            alt=""
                        />
                        <img
                            className="w-full"
                            src="assets/img/Ely.jpg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default portfolio;
