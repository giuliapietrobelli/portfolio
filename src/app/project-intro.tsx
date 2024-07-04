export default function ProjectIntro(props: any) {
  return (
    <>
    <div className="flex flex-col gap-3 text-center max-w-2xl xl:max-w-3xl self-center">
      {props.title ? <h2 className="font-normal md:font-medium text-3xl xl:text-5xl leading-snug">{props.title}</h2> : null}
      <p className="font-extralight text-xl xl:text-2xl leading-relaxed xl:leading-relaxed my-6">{props.children}</p>
    </div>      
    </>
  )
}