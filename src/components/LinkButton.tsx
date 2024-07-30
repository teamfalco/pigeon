import { ParentProps } from "solid-js";

interface LinkButtonProps {
    href: string;
}

export default function LinkButton({ children, href }: ParentProps<LinkButtonProps>) {
    return <a class="p-2 rounded-md hover:bg-gray-600" href={href}>
        {children}
    </a>
}