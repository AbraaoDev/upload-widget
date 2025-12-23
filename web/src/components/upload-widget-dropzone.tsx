import { useDropzone } from 'react-dropzone'


export function UploadWidgetDropzone() {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    multiple: true,
    accept: {
      'image/jpeg': [],
      'image/png': [],
    },
    onDrop(acceptedFiles) {
      console.log(acceptedFiles)
    },
  })
  return (
    <div className="px-3 flex flex-col gap-3" >
      <div {...getRootProps()}
        data-active={isDragActive}
        className='cursor-pointer text-zinc-400 bg-black/20 rounded-lg border border-zinc-700 border-dashed h-32 flex flex-col items-center justify-center gap-1 transition-colors hover:border-zinc-600 data-[active=true]:bg-emerald-500/10 data-[active=true]:border-emerald-500 data-[active=true]:text-emerald-400'>
        <input type='file' {...getInputProps()} />
        <span className='text-xs'>Drop your files here or</span>
        <span className='text-xs underline'>click to open picker</span>
      </div>
      <span className='text-xs text-zinc-400'>Only PNG and JPG files are supported</span>
    </div>
  )
}