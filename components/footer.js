export default function Footer(props){
    return (
        <footer className="flex justify-between mb-5 -mt-2 bg-green-500 py-7">
            <h1 className="ml-6 text-2xl font-weight: 900">
                {
                props.Branches.length
                }
                Locations World Wide
            </h1>
        </footer>
    )
}