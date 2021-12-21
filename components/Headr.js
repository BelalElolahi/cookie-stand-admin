import Link from 'next/link'

export default function Header() {
    return (
        <header className="flex justify-between -mt-2 bg-green-500 py-7">
            <h1 className="ml-6 text-5xl font-bold font-weight: 900">Cookie Stand Admin</h1>

            <ul className='flex row-auto'>
                

                <li className='mr-2 '>
                    <Link href="/overview">
                        <button class="bg-transparent hover:bg-gray-400 text-black font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                            Overview
                        </button>
                    </Link>
                </li>
            </ul>

        </header>
    )
}