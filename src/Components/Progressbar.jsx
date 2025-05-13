import React from "react";
import * as Progress from '@radix-ui/react-progress';

const Progressbar = ({ value }) => {
    return (
        <Progress.Root className="relative overflow-hidden bg-gray-800 rounded-full w-full h-2">
            <Progress.Indicator
                className="bg-white w-full h-full transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${100 - value}%)` }}
            />
        </Progress.Root>
    );
};

export default Progressbar;
