import { Button } from "flowbite-react";

interface EditButtonProps {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    text?: string;
    className?: string;

}
export const EditButton = ({ onClick, text = "Edit" }: EditButtonProps) => {
    return (
        <Button color="success" onClick={onClick} className="delete-button">
            {text}
        </Button>
    );

}


