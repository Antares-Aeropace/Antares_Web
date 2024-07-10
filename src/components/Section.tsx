import "../styles/components/Section.css"

type Props = {
    children: string | JSX.Element | JSX.Element[]
    side: boolean
}

const Section = ({children, side}:Props) => {
    return (
        <div className={side?"Section_rigth container": "Section_left container"}>
            {
                (side)?
                (
                    <>
                        <div></div>
                        <div>{children}</div>
                    </>

                ):
                (
                    <>
                        <div>{children}</div>
                        <div></div>
                    </>
                )
            }
        </div>
    )
}

export default Section