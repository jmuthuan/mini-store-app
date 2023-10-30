import Image from 'next/image';

const Details = ({ details }) => {

    return (
        <>
            <section>
                <section>
                    <Image
                        src={details.thumbnail}
                        alt={`images of ${details.title}`}
                        width={150}
                        height={150}
                    />
                </section>
                <aside>
                    {
                        details.images.map(image => {
                            return (
                                <Image
                                    src={image}
                                    alt={`more images of ${details.title}`}
                                    width={64}
                                    height={64}
                                    key={image}
                                />
                            )
                        })
                    }
                </aside>
            </section>

            <section>
                <h2>{details.title}</h2>
            </section>

            <section>
                <div>
                    <p>${details.price}</p>
                    <p>{details.stock} available</p>
                </div>
                <div>{details.rating}</div>
            </section>

            <section>
                <p>{details.description}</p>
            </section>

            <button>Buy</button>        
        </>
    )

}

export default Details;