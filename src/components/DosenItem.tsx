import { ReactNode } from "react";

interface DosenItemProps {
    className?: string;
    fontSize: string;
    children: ReactNode;
    keyValue?: number
}

const DosenItem: React.FunctionComponent<DosenItemProps> = ({className, fontSize, children, keyValue}) => {
    return (
        <div key={keyValue} className={`w-[140px] h-[37px] flex items-center justify-center ${className}`}>
            <p className={`text-black font-bold text-center ${fontSize}`}>{children}</p>
        </div>
    )
}

export default DosenItem