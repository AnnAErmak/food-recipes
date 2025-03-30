import React from 'react';
import SpinnerIcon from "../icons/SpinnerIcon";
import cn from "classnames";
import './Loader.scss'

export type LoaderProps = {
    /** Размер */
    size?: 's' | 'm' | 'l';
    /** Дополнительный класс */
    className?: string;
};

const Loader: React.FC<LoaderProps> = ({className, size='l'}) => {
    return (
        <SpinnerIcon
        className={cn(className, "loader", `loader_size_${size}`)}
        color={"accent"}
        />
    )
};

export default Loader;
