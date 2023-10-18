import image from '../assest/blog.avif';

const Cards = () => {
    const submitContent = () => {
        const contentToSubmit = document.querySelector('.content-to-copy').innerHTML;
        const submitDiv = document.querySelector('.submit-div');
        submitDiv.innerHTML = contentToSubmit;
    };

    return (
        <div className="bg-black py-16 px-1 mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4" onClick={submitContent}>
                {Array(4).fill().map((_, index) => (
                    <div key={index} className="rounded overflow-hidden shadow-lg bg-gray-500">
                        <img className="w-full" src={image} alt="Sunset in the mountains" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                            <p className="text-black text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                            <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                            <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cards;
