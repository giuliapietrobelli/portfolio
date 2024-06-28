export default function ProjectIntro(props: any) {
  return (
    <>
    <div className="text-left md:text-center md:max-w-[62%] self-center">
      {props.title ? <h2 className="font-medium text-4xl md:text-5xl leading-tight">{props.title}</h2> : null}
      <p className="font-extralight text-2xl leading-10 my-6">{props.children}</p>
    </div>      
    </>
  )
}