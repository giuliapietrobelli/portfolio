export default function ProjectIntro(props: any) {
  return (
    <>
    <div className="flex flex-col gap-3 text-center max-w-3xl xl:max-w-4xl self-center">
      {props.title ? <h2 className="font-normal md:font-medium text-3xl md:text-4xl leading-snug">{props.title}</h2> : null}
      {props.subtitle ? <h3 className="font-normal md:font-medium text-xl md:text-3xl leading-snug">{props.subtitle}</h3> : null}
      <p className="font-extralight text-xl leading-relaxed xl:leading-relaxed my-6">{props.children}</p>
    </div>      
    </>
  )
}
