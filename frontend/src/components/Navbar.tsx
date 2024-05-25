

export default function Navbar(){
    return(
        <>
            <header className="flex gap-5 justify-between self-stretch px-14 py-3.5 w-full bg-white border border-solid border-slate-200 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="flex gap-2 my-auto text-lg font-semibold tracking-tight text-slate-900 p-3">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d845759d541c93e8c0f6f367951d8f12119c833ea11e0e9131f79cc391d77885?apiKey=3d7758fb2efd4cadac0988d4c1804282&" alt="GenAI Stack Logo" className="shrink-0 aspect-square w-[25px]" />
          <span className="flex-auto my-auto text-2xl font-bold">GenAI Stack</span>
        </div>
      </header>
        </>
    )
}