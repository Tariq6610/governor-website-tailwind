import Link from "next/link"

function Footer() {
  return (
    <div className="bg-rose-50">
    <div className='md:w-[80%] w-full flex justify-between py-14 mx-auto'>
        <div>
        <h1 className="text-xl font-bold mb-3">Core Cources </h1>
          <ul className="mb-4">
            <li className="mb-2 hover:underline">
              <Link href="#">Programming Fundamentals</Link>
            </li>
            <li className="mb-2 hover:underline">
              <Link href="#">Web2 using NextJs</Link>
            </li>
            <li className="mb-2 hover:underline">
              <Link href="#">Earn as You Learn</Link>
            </li>
          </ul>
        </div>
        <div>
        <h1 className="text-xl font-bold mb-3">advanced Cources</h1>
          <ul>
            <li className="mb-2 hover:underline">
              <Link href="#">Web 3 and Metaverse</Link>
            </li>
            <li className="mb-2 hover:underline">
              <Link href="#">Cloud-Native Computing</Link>
            </li>
            <li className="mb-2 hover:underline">
              <Link href="#">
                Artificial Intelligence (AI) and Deep Learning
              </Link>
            </li>
            <li className="mb-2 hover:underline">
              <Link href="#">Ambient Computing and IoT</Link>
            </li>
            <li className="mb-2 hover:underline">
              <Link href="#">Genomics and Bioinformatics</Link>
            </li>
            <li className="mb-2 hover:underline">
              <Link href="#">Network Programmability and Automation</Link>
            </li>
          </ul>
        </div>
        <div>
        <h1 className="text-xl font-bold mb-3">Social Links</h1>
        <h1>Facebook</h1>
        <h1>Youtube</h1>
        <h1>WhatsApp</h1>
        </div>

    </div>
    </div>
  )
}

export default Footer