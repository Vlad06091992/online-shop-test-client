import {SVGProps, Ref, forwardRef} from "react";
import {ThemeColors} from "src/types.ts";

type Props = {
    color?: ThemeColors
} & SVGProps<SVGSVGElement>

const CheckedIcon = (
    props: Props,
    ref: Ref<SVGSVGElement>,
) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={18}
        height={18}
        fill="none"
        viewBox="0 0 24 24"
        ref={ref}
        {...props}
    >
        <path
            stroke={props.color == 'white' ? '#A3A7BF' : '#FFF'}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 12.611 8.923 17.5 20 6.5"
        />
    </svg>
);

const ForwardRef = forwardRef(CheckedIcon);

export {ForwardRef as CheckedIcon};