
import Link from 'next/link'
export default function Overview() {
    return (

        <div>
            <h1>Overview page</h1>
            <Link href="/">
                <button class="bg-transparent hover:bg-gray-400 text-black font-semibold hover:text-white py-2 px-4 border border-black-500 hover:border-transparent rounded">
                    Home
                </button>
            </Link>
        </div>






    )
}