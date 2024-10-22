const User = (props) => {
    return (
        <div className="bg-zinc-100 text-black border max-w-sm mx-auto rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">Name: {props.name}</h2>
                <h3 className="text-xl mb-1">Location: Jaipur</h3>
                <h4 className="text-md text-black">Contact: @AnkitJangid</h4>
            </div>
        </div>
    );
};

export default User;
