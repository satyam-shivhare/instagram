function Suggestions() {

    const suggestion = [
        {
            id : 1,

        }
    ]
    return (
        <div className="mt-4 ml-10">
            <div className="flex justify-between text-sm mb-5">
                <h3 className="text-sm font-bold text-gray-400">Suggestions for You</h3>
                <button className="text-gray-600 font-semibold">See All</button>
            </div>

            <div className="flex items-center justify-between mt-3">
                <img className="w-10 h-10 rounded-full border p-[2px]" src="https://pbs.twimg.com/profile_images/1391002136482181124/ZoK2jJQD_400x400.jpg" />
                <div className="flex-1 ml-4">
                    <h2>Satyam</h2>
                    <h3 className="text-xs text-gray-400">Works at RJIT</h3>
                </div>
                <button className="text-blue-400 text-sm font-bold">follow</button>
            </div>
        </div>
    )
}

export default Suggestions
