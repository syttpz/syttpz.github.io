export default function Resume() {
  return (
    <div className="flex w-full h-[calc(100dvh-4rem)] flex-col md:h-dvh">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-700 px-5 py-4 sm:px-8">
        <h1 className="text-xl font-semibold">Resume</h1>
        <div className="flex flex-wrap gap-4 text-sm">
          <a href="/Eddy_Hu_Resume.pdf" target="_blank" rel="noreferrer" className="underline underline-offset-4">Open PDF</a>
          <a href="/Eddy_Hu_Resume.pdf" download className="underline underline-offset-4">Download</a>
        </div>
        <p className="w-full text-sm text-stone-400 ">If the preview is unavailable, open or download the PDF.</p>
      </div>
      <iframe
        src="/Eddy_Hu_Resume.pdf"
        className="w-full min-h-0 flex-1 border-0"
        title="Resume — Eddy Hu"
      />
    </div>
  )
}
