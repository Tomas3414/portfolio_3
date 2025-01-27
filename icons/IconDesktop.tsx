import IconProps from "@/interface/IconProps";

const IconDesktop = (props: IconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={props.className}
            width={props.size ?? "24"}
            height={props.size ?? "24"}
            viewBox="0 0 512 512"
        >
            <rect width="512" height="512" fill="none" />
            <rect
                width="448"
                height="320"
                x="32"
                y="64"
                fill="none"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="32"
                rx="32"
                ry="32"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
                d="m304 448l-8-64h-80l-8 64z"
            />
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
                d="M368 448H144"
            />
            <path
                fill="currentColor"
                d="M32 304v48a32.09 32.09 0 0 0 32 32h384a32.09 32.09 0 0 0 32-32v-48Zm224 64a16 16 0 1 1 16-16a16 16 0 0 1-16 16"
            />
        </svg>
    );
};

export default IconDesktop;
