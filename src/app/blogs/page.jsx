import Link from "next/link";

export default function Blogs() {
    return(
        <div className="flex items center gap-5 flex-row my-4">
        <Link className="bg-gray-800 text-white"
        href="/blogs/1">
        <h1 className="text-center">Blog Title</h1>
        <p>this is 1 blog</p>
        </Link>
        <Link className="bg-gray-800 text-white"
         href="/blogs/2">
        <h1 className="text-center">Blog Title</h1>
        <p>this is 2 blog</p>
        </Link>
        <Link className="bg-gray-800 text-white"
         href="/blogs/3">
        <h1 className="text-center">Blog Title</h1>
        <p>this is 3 blog</p>
        </Link>
        </div>
    )
}