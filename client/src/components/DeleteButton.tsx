import { Button } from "flowbite-react";

interface DeleteButtonProps {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    text?: string;
    className?: string;
}


const DeleteButton = ({ onClick, text = "Delete" }: DeleteButtonProps) => {
    return (
        <Button color="failure" onClick={onClick} className="delete-button">
            {text}
        </Button>
    );
}

export default DeleteButton;